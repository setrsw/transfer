const dotenv = require('dotenv');
result=dotenv.config();

module.exports= {
    port: process.env.PORT || 3100,
    secret: process.env.SECRET,
    ip: process.env.IP||'http://8.129.77.166:3000',
};