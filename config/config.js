
require('dotenv').config()
module.exports = {
  development: {
    database: 'weekendgetaway_development',
    dialect: 'postgres'
  },
  test: {
    database: 'weekendgetaway_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'https://weekendgetawaybe.herokuapp.com/',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
