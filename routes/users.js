const express = require('express');
const userModel = require('../models/userModel');
const routes = express.Router();

routes.post("/signup", async (req, res) => {
    const {username, email, password} = req.body;
    if(!req.body.username || !req.body.password){
        res.json({status: false, message: "Invalid Username and Password"})
        return
    }
    try{
        const user = await userModel.create({username, email, password})
        res.status(200).json({
            message: "User Created Successfully",
            user})
    }catch(error){
        res.status(500).send(error)
    }
})

routes.post("/login", async(req, res) => {
    const {username, password} = req.body;
    if(!req.body.username || !req.body.password){
        res.json({status: false, message: "Invalid Username and Password"})
        return
    }
    try{
        const existingUser = await userModel.findOne({username, password})
        if(!existingUser){
            res.status(500).json({
                message: "Login not successfull",
                error: "User not found",
            })
        }else{
            res.status(200).json({
                message: "Login successfull",
                existingUser,
            })
        }
    }catch(error){
        res.status(500).send(error)
    }
})
module.exports = routes