const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Write POST endpoint to get the sum of two number
app.post('/add', (req, res) => {
    try {
        const { num1, num2 } = req.body;
        const result = Number(num1) + Number(num2);

        validateResult(result);

        res.json({ result });
    } catch (error) {
        handleError(res, error);
    }
});


//Write POST endpoint to get the differance of two number
app.post('/subtract', (req, res) => {
    try {
        const { num1, num2 } = req.body;
        const result = Number(num1) - Number(num2);

        validateResult(result);

        res.json({ result });
    } catch (error) {
        handleError(res, error);
    }
});


//Write POST endpoint to get the multiplication of two number
app.post('/multiply', (req, res) => {
    try {
        const { num1, num2 } = req.body;
        const result = Number(num1) * Number(num2);

        validateResult(result);

        res.json({ result });
    } catch (error) {
        handleError(res, error);
    }
});

//Write POST endpoint to check if the num2 is 0 or not and to get the result after dividing two number
app.post('/divide', (req, res) => {
    try {
        const { num1, num2 } = req.body;
        if (Number(num2) === 0) {
            return res.status(400).send({error: 'Cannot divide by zero'});
        }
        const result = Number(num1) / Number(num2);
        validateResult(result);
        res.json({ result });
    } catch (error) {
        handleError(res, error);
    }
});

function validateResult(result) {
    if (result < -1000000 || result > 1000000) {
        throw new Error('Overflow or Underflow');
    }
}

function handleError(res, error) {
    res.status(400).json({ status: 'error', message: error.message });
}

const server = app.listen(4000, () => {
    console.log(`Server running on port 4000`);
});

module.exports = app;
