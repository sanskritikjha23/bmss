import { Sequelize } from "sequelize";
import User from "./user.model.js";
import Budget from "./category.model.js";
import Expense from "./expense.model.js";

// Define associations
User.hasMany(Budget, { foreignKey: 'userId' });
Budget.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Expense, { foreignKey: 'userId' });
Expense.belongsTo(User, { foreignKey: 'userId' });

// Budget and Category association
Budget.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Budget, { foreignKey: 'categoryId' });


Expense.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Expense, { foreignKey: 'categoryId' });

// Sync all models
Sequelize.sync({ force: true }).then(() => {
  console.log("All models synced successfully.");
}).catch((err) => {
  console.error("Error syncing models:", err);
});

export { Sequelize, User, Budget };
