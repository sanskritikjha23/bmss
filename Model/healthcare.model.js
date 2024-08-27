import { DataTypes } from "sequelize";
import sequelize from "../db/user.db.js";

const Healthcare= sequelize.define("healthcare",{
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
  console.log("HealthCare Budget table synced");
}).catch(err => {
  console.error("Error syncing Healthcare Budget table:", err);
});
export default Healthcare;