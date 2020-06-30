const express = require('express');
const isEmpty = require('lodash/isEmpty');
const validator = require('validator');
const router = express.Router();
const sqlFn = require('../mysql');

const validatorInput = (data) => {
  let errors = {};
  if(validator.isEmpty(data.username)) {
    errors.username = '请填写用户名';
  }
  if(!validator.isEmail(data.email)) {
    errors.email = '请填写邮箱';
  }
  if(validator.isEmpty(data.password)) {
    errors.password = '请填写密码';
  }
  if(validator.isEmpty(data.passwordConfirm)) {
    errors.passwordConfirm = '请确认密码';
  }
  if(!validator.equals(data.password, data.passwordConfirm)) {
    errors.passwordConfirm = '两次输入密码不同';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}

router.post('/', (req, res) => {
  const { errors, isValid } = validatorInput(req.body);
  var sql = 'insert into user values (null, ?, ?, ?, ?)';
  var arr = [req.body.username, req.body.email, req.body.password, req.body.passwordConfirm];
  if(isValid) {
   sqlFn(sql, arr, function(data) {
    if(data.affectedRows) {
      res.send({success: true});
    } else {
      res.status(400).json({error: '注册失败'});
    }
   })
  } else {
    res.status(400).json(errors);
  }
})

router.get('/:username', (req, res) => {
  var sql = 'select * from user where username = ?';
  var arr = [req.params.username];
  sqlFn(sql, arr, function(data) {
    if(data) {
      res.send(data);
    } else {
      res.send({});
    }
  })
})

module.exports = router;