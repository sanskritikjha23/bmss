import { DataTypes } from "sequelize";
import sequelize from "../db/user.db.js";

const Stationary= sequelize.define("stationary",{
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
  console.log("Stationary Budget table synced");
}).catch(err => {
  console.error("Error syncing Stationary Budget table:", err);
});

export default Stationary;