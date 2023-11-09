const express = require('express');
const servicesController = require('../controllers/servicesController');
const { checkRole } = require('../middleware/rolesMiddleware');
const router = express.Router();

// Get All Services
router.get('/', servicesController.getAllServices);

// Get Service By Id
router.get('/:id', servicesController.getServicesById);

// Create Service
router.post('/', checkRole('admin'), servicesController.createService);

// Update Service
router.put('/:id', checkRole('admin'), servicesController.updateService);

// Delete Service
router.delete('/:id', checkRole('admin'), servicesController.deleteService);

module.exports = router;