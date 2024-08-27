import { DataTypes } from "sequelize";
import sequelize from "../db/user.db.js";

const Entertainment = sequelize.define("entertainment",{
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
      }
})

sequelize.sync().then(() => {
  console.log("Entertainment Budget table synced");
}).catch(err => {
  console.error("Error syncing Entertainment Budget table:", err);
});

export default Entertainment;