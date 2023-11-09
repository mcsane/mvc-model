const tours = require('../models/tours');
const uuid = require('uuid');

const getAllTours = (req, res) => {
    res.json(tours);
};

const getTourById = (req, res) => {
    const tour = tours.find((tour) => tour.id === req.params.id);
    res.json(tour);
};

const createTour = (req, res) => {
    const newTour = { id: uuid.v4(), ...req.body };
    tours.push(newTour);
    res.json(newTour);
};

const updateTour = (req, res) => {
    const tour = tours.find((tour) => tour.id === parseInt(req.params.id));
    if (tour){
        tours.forEach((tour , i) => {
            if (tour.id === parseInt(req.params.id)){
                tours[i] = {...tour, ...req.body};
                res.json({msg: 'Tour updated', tour: tours[i]});
            }
        });  
    }else{
        res.status(404).json({msg: `Tour not found with id ${req.params.id}`});
    }
};

const deleteTour = (req, res) => {
    const found = tours.some((tour) => tour.id === parseInt(req.params.id));
    if (found){
        const updatedTours = tours.filter((tour) => tour.id !== parseInt(req.params.id));
        res.json({msg: 'Tour deleted', tours: updatedTours});
        }else{
            res.status(404).json({msg: `Tour not found with id ${req.params.id}`});
        }
};

module.exports = {
    getAllTours,
    getTourById,
    createTour,
    updateTour,
    deleteTour,
};