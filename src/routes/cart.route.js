const express = require('express');
const app = express.Router();
const Cart = require('../models/cart.model');

app.post("/", async (req, res) => {
    try {
        const cart = await Cart.create(req.body);
        res.status(200).send({ success: true, cart });
    } catch (error) {
        res.status(500).send({ success: false, message: "Something went wrong" });
    }
})

app.put("/:id", async (req, res) => {
    try {
        const { quantity } = req.body;
        const cart = await Cart.findByIdAndUpdate(req.params.id, { quantity }, { new: true });
        res.status(200).send({ success: true, cart });
    } catch (error) {
        res.status(500).send({ success: false, message: "Something went wrong" });
    }
})

app.get("/:userId", async (req, res) => {
    try {
        const cart = await Cart.find({ user: req.params.userId }).populate("product");
        res.status(200).send({ success: true, cart });
    } catch (error) {
        res.status(500).send({ success: false, message: "Something went wrong" });
    }
})

app.delete("/:id", async (req, res) => {
    try {
        const cart = await Cart.findByIdAndDelete(req.params.id);
        res.status(200).send({ success: true, cart });
    } catch (error) {
        res.status(500).send({ success: false, message: "Something went wrong" });
    }
})

module.exports = app;