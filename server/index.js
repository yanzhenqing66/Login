const express = require('express');
const app = express();
const user = require('./routes/user');
const bodyParser = require('body-parser');
const auth = require('./routes/auth');

app.use(bodyParser.json());
app.use('/api/user', user);
app.use('/api/auth', auth);

app.listen(4000, (req, res) => {
  console.log('服务器运行在4000端口上');
  
})