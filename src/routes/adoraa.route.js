const express = require('express');
const app = express.Router();
const Adoraa = require('../models/adoraa.model');

app.post("/", async (req, res) => {
    console.log(req.body);
    try {
        const adoraa = await Adoraa.create(req.body);
        
        res.status(200).send({ success: true, adoraa });
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: "Something went wrong" });
    }
})

app.get("/", async (req, res) => {
    try {
        const adoraa = await Adoraa.find();
        res.status(200).send({ success: true, adoraa });
    } catch (error) {
        res.status(500).send({ success: false, message: "Something went wrong" });
    }
})

module.exports = app;