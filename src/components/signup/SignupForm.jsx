import React, { Component } from 'react';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      errors: {},
      isLoading: false,
      invalid: false
    }
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  checkUserExists = (e) => {
    const field = e.target.name;
    const val = e.target.value;
    let invalid;
    if (val !== '') {
      this.props.SignupActions.isUserExists(val).then(res => {
        let errors = this.state.errors;
        if (res.data[0]) {
          errors[field] = '用户名已存在';
          invalid = true;
        } else {
          errors[field] = '';
          invalid = false;
        }
        this.setState({ errors, invalid });
      })
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    // 节流和防抖
    this.setState({
      errors: {}, isLoading: true
    })
    this.props.SignupActions.userRequest(this.state)
      .then(() => {
        this.props.flashActions.addFlashMsg({
          type: 'success',
          text: '注册成功，欢迎加入！'
        })
        this.props.history.push('/');
      },
        ({ response }) => {
          this.setState({
            errors: response.data,
            isLoading: false
          })
        }
      )
  }
  render() {
    const { errors, isLoading, invalid } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div className='form-group'>
          <label className="control-label" htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={this.state.username}
            onChange={this.onChange} onBlur={this.checkUserExists}
            className={classnames('form-control', { 'is-invalid': errors.username })} />
          {errors.username && <span className="form-text text-muted">{errors.username}</span>}
        </div>

        <div className='form-group'>
          <label className="control-label" htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={this.state.email}
            onChange={this.onChange}
            className={classnames('form-control', { 'is-invalid': errors.email })} />
          {errors.email && <span className="form-text text-muted">{errors.email}</span>}
        </div>

        <div className='form-group'>
          <label className="control-label" htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={this.state.password}
            onChange={this.onChange}
            className={classnames('form-control', { 'is-invalid': errors.password })} />
          {errors.password && <span className="form-text text-muted">{errors.password}</span>}
        </div>

        <div className='form-group'>
          <label className="control-label" htmlFor="passwordConfirm">PasswordConfirm</label>
          <input type="password" id="passwordConfirm" name="passwordConfirm" value={this.state.passwordConfirm}
            onChange={this.onChange}
            className={classnames('form-control', { 'is-invalid': errors.passwordConfirm })} />
          {errors.passwordConfirm && <span className="form-text text-muted">{errors.passwordConfirm}</span>}
        </div>

        <div className="form-group">
          <button disabled={isLoading || invalid} className="btn btn-primary btn-lg">注册</button>
        </div>
      </form>
    )
  }
}

export default withRouter(SignupForm);