require('dotenv').config();
module.exports = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAMEDB,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logining: false,
        timezone: "+07:00"
      }
}
// {
//     "development": {
//       "username": "postgres",
//       "password": "Bau904481.",
//       "database": "apphouse",
//       "host": "127.0.0.1",
//       "dialect": "postgres",
//       "logining": false,
//       "timezone": "+07:00"
//     }
//   }
  