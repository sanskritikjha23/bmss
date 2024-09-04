// // models.js
// import { Sequelize } from "sequelize";
// import sequelize from "../db/user.db.js";
// import User from "./user.model.js";
// import Budget from "./category.model.js";  // Ensure this is the correct path and file name
// import Expense from "./expense.model.js";
// import Category from "./category.model.js"; // Ensure this model is defined

// // Define associations
// const defineAssociations = () => {
//   // Define associations
//   User.hasMany(Budget, { foreignKey: 'userId' });
//   Budget.belongsTo(User, { foreignKey: 'userId' });

//   User.hasMany(Expense, { foreignKey: 'userId' });
//   Expense.belongsTo(User, { foreignKey: 'userId' });

//   // Budget and Category association
//   Budget.belongsTo(Category, { foreignKey: 'categoryId' });
//   Category.hasMany(Budget, { foreignKey: 'categoryId' });

//   // Expense and Category association
//   Expense.belongsTo(Category, { foreignKey: 'categoryId' });
//   Category.hasMany(Expense, { foreignKey: 'categoryId' });
// };

// // Sync models with the database
// const syncModels = async () => {
//   try {
//     await sequelize.sync({ alter: true });  // Use `alter` to automatically adjust the schema
//     console.log("All models synced successfully.");
//   } catch (err) {
//     console.error("Error syncing models:", err);
//   }
// };

// // Initialize associations and sync models
// const initializeModels = async () => {
//   defineAssociations();
//   await syncModels();
// };

// // Execute initialization
// initializeModels();

// export default initializeModels;
import sequelize from '../db/user.db.js'; // Adjust the path to your sequelize instance
import User from './user.model.js'; // Adjust the path to your User model
import Budget from './budget.model.js'; // Adjust the path to your Budget model
import Expense from './expense.model.js'; // Adjust the path to your Expense model
import Category from './category.model.js'; // Adjust the path to your Category model

// Define associations
const defineAssociations = () => {
  // User and Budget association
  User.hasMany(Budget, { foreignKey: 'userId' });
  Budget.belongsTo(User, { foreignKey: 'userId' });

  // User and Expense association
  User.hasMany(Expense, { foreignKey: 'userId' });
  Expense.belongsTo(User, { foreignKey: 'userId' });

  // Budget and Category association
  Budget.belongsTo(Category, { foreignKey: 'categoryId' });
  Category.hasMany(Budget, { foreignKey: 'categoryId' });

  // Expense and Category association
  Expense.belongsTo(Category, { foreignKey: 'categoryId' });
  Category.hasMany(Expense, { foreignKey: 'categoryId' });
};

// Sync models with the database
const syncModels = async () => {
  try {
    await sequelize.sync(); // Use `alter` to automatically adjust the schema
    console.log('All models synced successfully.');
  } catch (err) {
    console.error('Error syncing models:', err);
  }
};

// Initialize associations and sync models
const initializeModels = async () => {
  defineAssociations();
  await syncModels();
};

// Execute initialization
initializeModels();

export default initializeModels;
