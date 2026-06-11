const express = require('express');
const router = express.Router();

const cars = require('../data/cars.json');

const{
    getRecommendations
}= require('../utils/recommendationEngine');

router.post("/", (req, res) => {
    try{
        const preferences = req.body;
        const recommendations = getRecommendations(cars, preferences);

        res.status(200).json({
            success: true,
            recommendations
    }
    );
    }catch(error){
        res.status(500).json({
            success: false,
            message:error.message
        });
    }
});

module.exports = router;