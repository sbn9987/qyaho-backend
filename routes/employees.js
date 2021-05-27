const express =require('express')
const router = express.Router();
const Employee = require("../models/employees");
const config = require('../config/database');



router.get("/test", async (req, res) => {
  const employee = await Employee.find();
  res.json(employee);
});

router.get("/:id", async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.json(employee);
});

router.post("/test", async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.json(employee);
});

router.put("/:id", async (req, res) => {
  await Employee.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false });
  res.json({
    message: "ok",
  });
});

router.delete("/remove", async (req, res) => {
  await Employee.deleteMany();
  res.json({
    message: "ok",
  });
});

router.delete("/:id", async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({
    message: "ok",
  });
});

module.exports = router;
