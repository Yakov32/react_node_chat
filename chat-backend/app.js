const express = require('express');
const config = require('./config/config');

const app = express();


app.get('/', (req, res) => {
   console.log('get route');

   res.json(config.someText);
})

app.listen(config.port, () => console.log(`server is running - http://localhost:${config.port}`));