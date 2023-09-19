const express = require('express');
const app = express.Router();
const Product = require('../models/product.model');

app.get("/", async (req, res) => {
    try {
        let { page, limit, category } = req.query;
        const query = {};
        if (category) query.category = category;
        page = parseInt(page) || 1;
        limit = parseInt(limit) || 10;
        const products = await Product.find(query).skip((page - 1) * limit).limit(limit);
        res.status(200).send({ success: true, products });
    } catch (error) {
        res.status(500).send({ success: false, message: "Something went wrong" });
    }
})

app.get("/:slug", async (req, res) => {
    try {
        const product = await Product.findOne({ slug: req.params.slug });
        res.status(200).send({ success: true, product });
    } catch (error) {
        res.status(500).send({ success: false, message: "Something went wrong" });
    }
})

app.post("/", async (req, res) => {
    try {
        const product = await Product.create({ ...req.body, slug: req.body.title.toLowerCase().split(" ").join("-") });
        res.status(200).send({ success: true, product });
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: "Something went wrong" });
    }
})

app.delete("/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).send({ success: true, product });
    } catch (error) {
        res.status(500).send({ success: false, message: "Something went wrong" });
    }
})

module.exports = app;
