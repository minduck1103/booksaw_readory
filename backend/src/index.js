const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const routes = require('./routes/index.js');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
 
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())

routes(app);

mongoose.connect(`${process.env.MONGO_DB}`)
    .then(() => {
        console.log('Connect Db success!');
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(port, () => {
    console.log('Server is running in port: ', + port);
});
