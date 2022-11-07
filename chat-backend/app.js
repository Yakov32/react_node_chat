const express = require('express');
const config = require('./config/config');
const bodyParser = require('body-parser');


const app = express();

//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('./routers'));

app.listen(config.port, () => console.log(`server is running - http://localhost:${config.port}`));