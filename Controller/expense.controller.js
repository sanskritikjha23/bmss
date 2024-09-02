import Expense from '../Model/expense.model.js'; // Adjust the import according to your setup

// Create a new expense
export const createExpense = async (req, res) => {
  try {
    const { description, amount, date } = req.body;
    
    // Ensure all required fields are provided
    if (!description || !amount || !date) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create the new expense
    const newExpense = await Expense.create({ description, amount, date });
    res.status(201).json({ expense: newExpense });
  } catch (error) {
    console.error('Error creating expense:', error);
    res.status(400).json({ error: 'Failed to create expense' });
  }
};


// Get all expenses
export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll(); // Adjust query as needed
    res.status(200).json({ expenses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve expenses' });
  }
};

// Update an expense by ID
export const updateExpense = async (req, res) => {
  const { id } = req.params;
  const { description, amount, date } = req.body;

  try {
    const expense = await Expense.findByPk(id);
    if (expense) {
      expense.description = description;
      expense.amount = amount;
      expense.date = date;
      await expense.save();
      res.status(200).json(expense);
    } else {
      res.status(404).json({ error: 'Expense not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Failed to update expense' });
  }
};

// Delete an expense by ID
export const deleteExpense = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Expense.destroy({ where: { id } });
    if (result) {
      res.status(200).json({ message: 'Expense deleted' });
    } else {
      res.status(404).json({ error: 'Expense not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete expense' });
  }
};
