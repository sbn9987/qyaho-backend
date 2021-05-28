const mongoose = require('mongoose');
const config = require('../config/database');


// User Schema
const CusNumSchema = mongoose.Schema({
    name: {
      type: String
    },
    email: {
      type: String,
      required: true,
      unique:1
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    birth : {
      type: String,
      required: true
    }
  });
  

  module.exports = mongoose.model("Cus_num", CusNumSchema);