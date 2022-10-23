const express = require('express');
const userModel = require('../models/userModel');
const routes = express.Router();

routes.post("/signup", async (req, res) => {
    const {username, password} = req.body;
    if(!req.body.username || !req.body.password){
        res.json({status: false, message: "Invalid Username and Password"})
        return
    }
    try{
        const user = await userModel.create({username, password})
        res.status(200).json(user)
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
        await userModel.login(username, password);
        res.status(200).json({
            id: req.user._id,
            username: req.user.username
        })
    }catch(error){
        res.status(500).send(error)
    }
})
module.exports = routes