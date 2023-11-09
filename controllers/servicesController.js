const services = require('../models/services');
const uuid = require('uuid');

const getAllServices = (req, res) => {
    res.json(services);
};

const getServicesById = (req, res) => {
    const service = services.find((service) => service.id === req.params.id);
    res.json(service);
};

const createService = (req, res) => {
    const newService = { id: uuid.v4(), ...req.body };
    services.push(newService);
    res.json(newService);
};

const updateService = (req, res) => {
    const service = services.find((service) => service.id === parseInt(req.params.id));
    if (service){
        services.forEach((service , i) => {
            if (service.id === parseInt(req.params.id)){
                services[i] = {...service, ...req.body};
                res.json({msg: 'Service updated', service: services[i]});
            }
        });  
    }else{
        res.status(404).json({msg: `Service not found with id ${req.params.id}`});
    }
};

const deleteService = (req, res) => {
    const found = services.some((service) => service.id === parseInt(req.params.id));
    if (found){
        const updatedServices = services.filter((service) => service.id !== parseInt(req.params.id));
        res.json({msg: 'Service deleted', services: updatedServices});
        }else{
            res.status(404).json({msg: `Service not found with id ${req.params.id}`});
        }
};

module.exports = {
    getAllServices,
    getServicesById,
    createService,
    updateService,
    deleteService,
};