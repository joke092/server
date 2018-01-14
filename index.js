const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');
require('./models/User');

mongoose.connect(keys.mongoURI);

const app = express();

// console.developers.google.com
// clientID 560092153894-lgehcq2i423aqgrioqmk29vbjp8bql4e.apps.googleusercontent.com
// clientSecret MdwSswYevBdHThxs1EK0FXbs

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
