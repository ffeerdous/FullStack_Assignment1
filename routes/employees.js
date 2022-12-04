const express = require('express');
const employeeModel = require("../models/employeeModel");
const routes = express.Router()

routes.get("/employees", async (req, res) => {
    //res.send({message: "Get All Employees"})
    try{
        const emps = await employeeModel.find()
        res.json(emps)
    }catch(error){
        res.status(500).json(error)
    }
})

routes.post("/employees", async (req, res) => {
    //res.send({message: "Get a New Employee"})
    try{
        const newEmp = new employeeModel(req.body)
        await newEmp.save()
        res.status(200).json(newEmp)
    }catch(error){
        res.status(500).json(error)
    }
})

routes.get("/employees/:eid", async (req, res) => {
    //res.send({message: "Get Employee by ID"})
    try{
        const emp = await employeeModel.findById(req.params.eid, req.body)
        if(!emp){
            res.status(500).json(error)
        }
        res.status(200).json(emp)
    }catch(error){
        res.status(500).json(error)
    }
})

routes.put("/employees/:eid", async (req, res) => {
    //res.send({message: "Update Employee by ID"})
    try{
        const updatedEmp = await employeeModel.findByIdAndUpdate(req.params.eid, req.body)
        await updatedEmp.save()
        res.status(200).json(updatedEmp)
    }catch(error){
        res.status(500).json(error)
    }
})

routes.delete("/employees", async (req, res) => {
    //res.send({...req.query, message: "Delete Employee by ID"})
    try{
        const deletedEmp = await employeeModel.findByIdAndDelete(req.query.eid, req.body)
        if(!deletedEmp){
            res.status(500).send(error)
        }
        res.status(200).send(deletedEmp)
    }catch(error){
        res.status(500).send(error)
    }
})

module.exports = routes;