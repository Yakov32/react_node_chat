require ('dotenv/config');

module.exports = {
   port: process.env.port,
   someText: process.env.SOME_TEXT,
};