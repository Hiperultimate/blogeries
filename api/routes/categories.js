const router = require('express').Router();
const Category = require('../models/Category.js');

//Create category
router.post('/', async (req,res) => {
    const newCat = new Category(req.body);
    try {
        const saveCat = await newCat.save();
        res.status(200).json(saveCat);
    } catch (error) {
        res.status(500).json(err);
    }
})

//Get all Category
router.get("/", async (req,res) => {
    try {
        const getAllCat = await Category.find();
        res.status(200).json(getAllCat);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;