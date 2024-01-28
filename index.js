const express = require('express');
const app = express();
router = require('./routes/index');
const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

app.use(express.json());

app.use('/', router);

const port = process.env.PORT || 3000;
app.listen()

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

