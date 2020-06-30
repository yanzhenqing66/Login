import React, { Component } from 'react';
import SignupForm from './SignupForm';
import * as SignupActions from '../../actions/SignupActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as flashActions from '../../actions/FlashMsg';

class Signup extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <SignupForm SignupActions = { this.props.SignupActions } flashActions={ this.props.flashActions } />
        </div>
        <div className="col-md-3"></div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    SignupActions: bindActionCreators(SignupActions, dispatch),
    flashActions: bindActionCreators(flashActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Signup);