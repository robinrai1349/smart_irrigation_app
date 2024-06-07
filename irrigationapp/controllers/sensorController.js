const Sensor = require('../models/sensorModel');

exports.createSensorData = async (req, res) => {
    const sensorData = new Sensor(req.body);
    try {
        const savedData = await sensorData.save();
        res.status(201).json(savedData);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

exports.getHomePage = async (req, res) => {
    try {
        const sensors = await Sensor.find();
        res.render('index', { title: 'Smart Irrigation System', sensors});
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};

exports.getAllSensorData = async (req, res) => {
    try {
        const data = await Sensor.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};