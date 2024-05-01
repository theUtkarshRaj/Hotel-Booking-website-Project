const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://theutkarshraj:captainraj.2004@cluster0.isye7jy.mongodb.net/';

mongoose.connect(mongoURL , {
  useUnifiedTopology :true,
  useNewUrlParser :true
});

var connection = mongoose.connection;

connection.on('error',()=>{
  console.log("Mongo Db connection failed")
});

connection.on('connected',()=>{
  console.log('mongo db connection sucessfull')
});

module.exports = mongoose;