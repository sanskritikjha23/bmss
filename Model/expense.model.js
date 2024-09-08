import { DataTypes } from 'sequelize';
import sequelize from '../db/user.db.js'; // Adjust the import according to your setup

const Expense = sequelize.define('Expense', {
  id :{
    type : DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement : true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
});

export default Expense;