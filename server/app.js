require('app-module-path').addPath(__dirname + '/');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors')
const mongoose = require('mongoose');

var index = require('./routes/index');
var user = require('./routes/users');

var app = express();
app.disable('x-powered-by');
app.use(cors())

//connection MongoDB
// mongoose.connect('mongodb://localhost/tablelist');
const db_config = {
  development: 'mongodb://zanisis:bRRpUNwN9D1gScdJ@cluster0-shard-00-00-dalpt.mongodb.net:27017,cluster0-shard-00-01-dalpt.mongodb.net:27017,cluster0-shard-00-02-dalpt.mongodb.net:27017/tablelist?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',
  production: 'mongodb://zanisis:bRRpUNwN9D1gScdJ@cluster0-shard-00-00-dalpt.mongodb.net:27017,cluster0-shard-00-01-dalpt.mongodb.net:27017,cluster0-shard-00-02-dalpt.mongodb.net:27017/tablelist?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',
  test: 'mongodb://localhost/testing-tablelist'
}
const app_env = app.settings.env
mongoose.Promise = global.Promise;
mongoose.connect(db_config[app_env],{
  useMongoClient: true,
},(err=>{
  console.log(`connect DB ${db_config[app_env]}`)
}))

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', index);
app.use('/user', user);

module.exports = app;
