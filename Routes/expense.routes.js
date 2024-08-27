import express from 'express';
import {
  createExpense,
  getExpenses,
  updateExpense,
  deleteExpense
} from '../Controller/expense.controller.js';

const router = express.Router();

// Create a new expense
router.post('/create-expense', createExpense);

// Get all expenses
router.get('/get-expenses', getExpenses);

// Update an expense by ID
router.put('/update-expense/:id', updateExpense);

// Delete an expense by ID
router.delete('/delete-expense/:id', deleteExpense);

export default router;
