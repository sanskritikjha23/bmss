import { DataTypes } from "sequelize";
import sequelize  from "../db/user.db.js";

const Transport = sequelize.define("transport",{
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
  console.log("Transport Budget table synced");
}).catch(err => {
  console.error("Error syncing Transport Budget table:", err);
});

export default Transport;