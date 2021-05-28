const mongoose = require('mongoose');
const config = require('../config/database');


// User Schema
const CusNumSchema = mongoose.Schema({
    name: {
      type: String
    },
    birth : {
      type: String,
      required: true
    }
  });
  

  module.exports = mongoose.model("Cus_num", CusNumSchema);