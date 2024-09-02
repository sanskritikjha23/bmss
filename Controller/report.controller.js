
export const generateReport = async (req, res) => {
  try {
    // Example data, replace with actual data fetching logic
    const expenses = [
      { date: '2024-01-01', amount: 100 },
      { date: '2024-02-01', amount: 200 },
      { date: '2024-03-01', amount: 150 }
    ];

    // Process data to get labels and data
    const labels = expenses.map(expense => new Date(expense.date).toLocaleString('default', { month: 'short' }));
    const data = expenses.map(expense => expense.amount);

    // Send JSON response
    res.status(200).json({ labels, data });
  } catch (error) {
    console.error('Error generating report:', error);
    res.status(500).json({ error: 'Failed to generate report' });
  }
};
