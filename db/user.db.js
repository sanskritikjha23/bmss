import { Sequelize } from 'sequelize';

// Define Sequelize instance
const sequelize = new Sequelize('bms', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging: console.log, // Logs all SQL queries for debugging
});

// Authenticate and connect to the database
sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;
