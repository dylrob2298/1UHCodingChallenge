const express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const userToken = require('./routes/userToken');
const connectEpic = require('./routes/connectEpic');
const getEverything = require('./routes/fhirEverything');
const allPatients = require('./routes/allPatients');

const app = express();


app.use(bodyParser.json());
app.use(cors())

app.use('/user-token', userToken);
app.use('/connect-epic', connectEpic);
app.use('/get-everything', getEverything)
app.use('/all-patients', allPatients);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});
