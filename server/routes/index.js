const express = require('express')
const app = express.Router()
const path=require('path')
app.use('/login',require('./login'));
app.use('/registro',require('./registro'));
app.use('/menu',require('./menu'));

module.exports = app;