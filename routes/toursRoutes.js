const express = require('express');
const toursController = require('../controllers/toursController');
const router = express.Router();

// Get All Tours
router.get('/', toursController.getAllTours);

// Get Tour By Id
router.get('/:id', toursController.getTourById);

// Create Tour
router.post('/', toursController.createTour);

// Update Tour
router.put('/:id', toursController.updateTour);

// Delete Tour
router.delete('/:id', toursController.deleteTour);

module.exports = router;