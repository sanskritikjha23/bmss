import { Sequelize } from "sequelize";
import User from "./user.model.js";
import Budget from "./category.model.js";
import Debt from "./debt.model.js";
import Entertainment from "./entertainment.model.js";
import Food from "./Food.model.js";
import Healthcare from "./healthcare.model.js";
import Stationary from "./stationary.model.js";
import Transport from "./transport.model.js";


// Initialize Sequelize with your database configuration
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'mysql', // or 'postgres', 'sqlite', etc.
// });

// Import models
// const User = userModel(sequelize);
// const Budget = budgetModel(sequelize);
// const Debt = debtModel(sequelize);
// const Entertainment = entertainmentModel(sequelize);
// const Food = foodModel(sequelize);
// const Healthcare = healthcareModel(sequelize);
// const Stationary = stationaryModel(sequelize);
// const Transport = transportModel(sequelize);
// const Category = categoryModel(sequelize);

// Define associations
User.hasMany(Budget, { foreignKey: 'userId' });
Budget.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Debt, { foreignKey: 'userId' });
Debt.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Entertainment, { foreignKey: 'userId' });
Entertainment.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Food, { foreignKey: 'userId' });
Food.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Healthcare, { foreignKey: 'userId' });
Healthcare.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Stationary, { foreignKey: 'userId' });
Stationary.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Transport, { foreignKey: 'userId' });
Transport.belongsTo(User, { foreignKey: 'userId' });

// Budget and Category association
Budget.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Budget, { foreignKey: 'categoryId' });

Debt.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Debt, { foreignKey: 'categoryId' });

Entertainment.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Entertainment, { foreignKey: 'categoryId' });

Food.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Food, { foreignKey: 'categoryId' });

Healthcare.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Healthcare, { foreignKey: 'categoryId' });

Stationary.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Stationary, { foreignKey: 'categoryId' });

Transport.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Transport, { foreignKey: 'categoryId' });

// Sync all models
sequelize.sync({ force: true }).then(() => {
  console.log("All models synced successfully.");
}).catch((err) => {
  console.error("Error syncing models:", err);
});

export { sequelize, User, Budget, Debt, Entertainment, Food, Healthcare, Stationary, Transport, Category };
