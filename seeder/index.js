var fs = require('fs');
var path = require('path');
var basename = path.basename(module.filename);
const { exec } = require('child_process');
const env = process.env.NODE_ENV || 'development'

const dbnames = {
    development: 'tcweibo_dev',
    production: 'tcweibo_prod',
    test: 'tcweibo_test'
}

const db = dbnames[env];


fs
    .readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-5) === '.json');
    })
    .forEach(function (file) {
        const collection = file.substring(0, file.indexOf('.json'))
        exec(`mongoimport --db ${db} --collection ${collection} --drop --file ${__dirname + '/' + file}`)
        console.log('seed for ' + collection + ' succeeded')
    });

// module.exports = obj;
