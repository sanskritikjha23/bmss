import { DataTypes } from "sequelize";
import sequelize from "../db/user.db.js";

const Food = sequelize.define("Food", {
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
});
sequelize.sync().then(() => {
  console.log("Food Budget table synced");
}).catch(err => {
  console.error("Error syncing Food Budget table:", err);
});
export default Food;