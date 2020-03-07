module.exports = {
  development: {
    username: 'root',
    password: '123',
    database: 'exercise_dev',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: 'root',
    password: '123',
    database: 'exercise_test',
    host: '127.0.0.1',
    dialect: 'postgres',
    logging: console.log,
    logQueryParameters: true,
  },
  production: {
    use_env_variable: true,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'postgres',
  },
};
