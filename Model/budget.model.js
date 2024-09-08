import { DataTypes } from 'sequelize';
import sequelize from '../db/user.db.js'; // Adjust the path to your sequelize instance

const Budget = sequelize.define('Budget', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  typeOfBudget: {
    type: DataTypes.STRING,
    allowNull: false
  },
  time: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  usualExpenseOfMonth: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  limit: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'User', // Name of the table in the database
      key: 'id'
    }
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Category', // Name of the table in the database
      key: 'id'
    }
  }
});

export default Budget;
