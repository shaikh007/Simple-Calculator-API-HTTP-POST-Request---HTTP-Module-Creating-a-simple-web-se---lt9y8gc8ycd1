const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Write POST endpoint to get the sum of two number
app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ status: 'error', message: 'Invalid data types' });
    }

    if (num1 > 1000000 || num2 > 1000000 || num1 + num2 > 1000000) {
        return res.status(400).json({ status: 'error', message: 'Overflow' });
    }

    const result = num1 + num2;
    res.json({ result });
});


//Write POST endpoint to get the differance of two number
app.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ status: 'error', message: 'Invalid data types' });
    }

    if (num1 < -1000000 || num2 < -1000000 || num1 - num2 < -1000000) {
        return res.status(400).json({ status: 'error', message: 'Underflow' });
    }

    const result = num1 - num2;
    res.json({ result });
});


//Write POST endpoint to get the multiplication of two number
app.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ status: 'error', message: 'Invalid data types' });
    }

    if (num1 > 1000000 || num2 > 1000000 || num1 * num2 > 1000000) {
        return res.status(400).json({ status: 'error', message: 'Overflow' });
    }

    const result = num1 * num2;
    res.json({ result });
});

//Write POST endpoint to check if the num2 is 0 or not and to get the result after dividing two number
app.post('/divide', (req, res) => {
    const { num1, num2 } = req.body;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ status: 'error', message: 'Invalid data types' });
    }

    if (num2 === 0) {
        return res.status(400).json({ status: 'error', message: 'Cannot divide by zero' });
    }

    const result = num1 / num2;
    res.json({ result });
});


const server = app.listen(4000, () => {
    console.log(`Server running on port 4000`);
});

module.exports = app;