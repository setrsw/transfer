const dotenv = require('dotenv');
result=dotenv.config();

module.exports= {
    port: process.env.PORT || 3100,
    secret: process.env.SECRET,
    ip: process.env.IP,
};