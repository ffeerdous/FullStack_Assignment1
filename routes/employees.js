const express = require('express');
const employeeModel = require("../models/employeeModel");
const routes = express.Router()

routes.get("/employees", (req, res) => {
    res.send({message: "Get All Employees"})
})

routes.post("/employees", (req, res) => {
    res.send({message: "Get a New Employee"})
})

routes.get("/employees/:eid", (req, res) => {
    res.send({message: "Get Employee by ID"})
})

routes.put("/employees/:eid", (req, res) => {
    res.send({message: "Update Employee by ID"})
})

routes.delete("/employees", (req, res) => {
    res.send({...req.query, message: "Delete Employee by ID"})
})

module.exports = routes;