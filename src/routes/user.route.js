const express = require('express');
const app = express.Router();
const User = require('../models/user.model');


app.post("/register", async (req, res) => {
    const { name, email, phone } = req.body;
    try {
        const user = await User.findOne({ email })
        if (user) {
            res.status(401).send({ message: "User already exists" })
        } else {
            const newUser = new User({
                name,
                email,
                phone
            })
            await newUser.save()
            res.status(200).send({ message: `${newUser.type === "admin" ? "Admin" : "User"} Signup Successful`, user: { name: newUser.name, email: newUser.email, type: newUser.type, _id: newUser._id } })
        }
    } catch (error) {
        res.status(500).send({ message: "User Signup Failed Please Try Again" })
    }
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password })
        if (user) {
            res.status(200).send({ message: "Login Successful", user: { name: user.name, email: user.email, _id: user._id } })
        } else {
            res.status(401).send({ message: "Invalid Credentails" })
        }
    } catch (error) {
        res.status(401).send({ message: "Login Failed Please Try Again" })
    }
})

module.exports = app;