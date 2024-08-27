import { DataTypes } from "sequelize";
import sequelize  from "../db/user.db.js";

const Debt= sequelize.define("debt",{
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
  console.log("Debt Budget table synced");
}).catch(err => {
  console.error("Error syncing Debt Budget table:", err);
});

export default Debt;