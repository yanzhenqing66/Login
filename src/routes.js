import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Shop from './components/shop/Shop';

export default (
  <div>
    <Route path='/' component={ App } exact></Route>
    <Route path='/signup' component={ Signup }></Route>
    <Route path='/login' component={ Login }></Route>
    <Route path='/shop' component={ Shop }></Route>
  </div>
)