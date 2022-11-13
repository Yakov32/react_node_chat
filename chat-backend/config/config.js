require ('dotenv/config');

module.exports = {
   port: process.env.port,
   appSecret: process.env.APP_SECRET,
   appUrl: process.env.APP_URL
};