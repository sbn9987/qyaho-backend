const express =require('express');
const router = express.Router();
const config = require('../config/database');
const Cus_num = require('../models/customer_num');


router.get("/cus_nums", async (req, res) => {
    const customer = await Cus_num.find();
    try {
       }
       catch (error) {
       }
    res.json(customer);
  });
  
  router.get("/:id", async (req, res) => {
    const customer = await Cus_num.findById(req.params.id);
    try {
       }
       catch (error) {
       }
    res.json(customer);
  });
  
  router.post("/cus_nums", async (req, res) => {
    const customer = new Cus_num(req.body);
    await customer.save();
    try {
       }
       catch (error) {
       }
    res.json(customer);
  });
  
//   router.put("/:id", async (req, res) => {
//     await Cus_num.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false });
//     res.json({
//       message: "ok",
//     });
//   });
  
//   router.delete("/remove", async (req, res) => {
//     await Cus_num.deleteMany();
//     res.json({
//       message: "ok",
//     });
//   });
  
//   router.delete("/cus_nums/:id", async (req, res) => {
//     await Cus_num.findByIdAndDelete(req.params.id);
//     res.json({
//       message: "ok",
//     });
//   });
  
  module.exports = router;