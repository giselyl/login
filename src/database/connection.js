const configuration = require('../../knexfile');

const connection = require('knex')(configuration.development);

module.exports = connection;
