const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const cookieParser = require('cookie-parser');
// app.use(cookieParser());

const loginRouter = require('./routes/login');
const signupRouter = require('./routes/signup');

app.use(express.static('dist'));
app.use('/api/login', loginRouter);
app.use('/api/signup', signupRouter);


module.exports = app;