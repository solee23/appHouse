const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const initRoutes = require('./routes/index');
const app = express();

require('dotenv').config();

app.use(cors({
    origin: process.env.CLIENT_URL,
}));
app.use(express.json());
app.use(express.urlencoded({extends: true}));

initRoutes(app);
db();

const PORT = process.env.PORT || 6001;
app.listen(PORT || 6001, () => {
    console.log(':::Server is runing...........');
});