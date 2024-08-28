import { DataTypes } from "sequelize";
import sequelize from "../db/user.db.js";

import User from "../Model/user.model.js";

const Budget= sequelize.define("budget",{
    categoryName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      typeOfBudget: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      time: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      usualExpenseOfMonth: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      limit: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: User, // or 'User' if using the model name as a string
          key: 'id'    // Ensure 'id' is a string
        }
      } 
})
      

      export default Budget;
     