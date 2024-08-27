import { DataTypes } from 'sequelize';
import sequelize from '../db/user.db.js'; // Adjust the import according to your setup

const Expense = sequelize.define('Expense', {
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

export default Expense;
