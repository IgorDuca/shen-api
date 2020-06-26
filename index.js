const express = require('express')
const monk = require('monk')
const yup = require('yup')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const fs = require('fs')

const app = express()

app.use(helmet())
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message:"Working perfectly!"
    });
});

const port = process.env.PORT || 7777;

app.listen(port, () =>{
    console.log(`Listening at port http://localhost:${port}`)
})