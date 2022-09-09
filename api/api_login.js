const express = require("express");
const router = express.Router();
const user = require("./../model/user");
const emp_master = require("./../model/employee_master");
const bcrypt = require("bcryptjs");
const constant = require("./../constant/constant");

router.post("/login", async (req, res) => {
  try {
    var result = await user.findOne({
      where: {
        user_name: req.body.user_name,
      },
    });

    if (bcrypt.compareSync(req.body.password, result.password)) {
      res.json({
        result: constant.OK,
        message: constant.OK,
      });
    } else {
      res.json({
        result: constant.NOK,
        message: constant.NOK,
      });
    }
  } catch (error) {
    res.json({
      error,
      message: "error",
    });
  }
});

router.get("/user", async (req, res) => {
  try {
    var result = await user.findAll();
    res.json({
      result,
      message: constant.OK,
    });
  } catch (error) {
    res.json({
      error,
      message: constant.NOK,
    });
  }
});

router.post("/user", async (req, res) => {
  try {
    //แปลง Password
    req.body.password = await bcrypt.hashSync(req.body.password, 8);
    
    await user.create(req.body);
    res.json({
      result: req.body,
      message: constant.OK,
    });
  } catch (error) {
    res.json({
      error,
      message: constant.NOK,
    });
  }
});

router.put("/user", async (req, res) => {
  try {
    var result = await user.update(req.body, {
      where: { user_name: req.body.user_name },
    });
    res.json({
      result,
      message: constant.OK,
    });
  } catch (error) {
    res.json({
      error,
      message: constant.NOK,
    });
  }
});

router.delete("/user", async (req, res) => {
  try {
    let result = await user.destroy({
      where: { user_name: req.body.user_name },
    });
    res.json({
      result,
      message: constant.OK,
    });
  } catch (error) {
    res.json({
      error,
      message: constant.NOK,
    });
  }
});

router.get("/emp_master", async (req, res) => {
  try {
    var result = await emp_master.findAll();

    res.json({
      result,
      message: constant.OK,
    });
  } catch (error) {
    res.json({
      error,
      message: constant.NOK,
    });
  }
});

router.post("/emp_master", async (req, res) => {
  try {
    await emp_master.create(req.body);
    res.json({
      result: req.body,
      message: constant.OK,
    });
  } catch (error) {
    res.json({
      error,
      message: constant.NOK,
    });
  }
});

router.put("/emp_master", async (req, res) => {
  try {
    var result = await emp_master.update(req.body, {
      where: { employee_number: req.body.employee_number },
    });
    res.json({
      result,
      message: constant.OK,
    });
  } catch (error) {
    res.json({
      error,
      message: constant.NOK,
    });
  }
});

router.delete("/emp_master", async (req, res) => {
  try {
    let result = await emp_master.destroy({
      where: { employee_number: req.body.employee_number },
    });
    res.json({
      result,
      message: constant.OK,
    });
  } catch (error) {
    res.json({
      error,
      message: constant.NOK,
    });
  }
});

module.exports = router;
