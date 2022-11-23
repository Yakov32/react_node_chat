const express = require('express');
const config = require('./config/config');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

//middleware
app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('./routers'));
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/uploads'))

app.listen(config.port, () => console.log(`server is running - ${config.appUrl}:${config.port}`));