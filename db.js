
require('dotenv').config()
const Redshift = require('node-redshift'),
    client = {
        user: process.env.DB_USER,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        host: process.env.DB_HOST
    }

exports.raw = async (statement, params) => {
    // The values passed in to the options object will be the difference between a connection pool and raw connection
    var redshiftClient = new Redshift(client, { rawConnection: false });

    // options is an optional object with one property so far {raw: true} returns 
    // just the data from redshift. {raw: false} returns the data with the pg object
   return Promise.resolve(redshiftClient.parameterizedQuery(statement, params))
    //instead of promises you can also use callbacks to get the data

}