
import express from 'express';
import cors from 'cors';
import CategoryRouter from './Routes/category.routes.js';
import UserRouter from './Routes/user.router.js';
import ExpenseRouter from './Routes/expense.routes.js';
import ReportRoutes from './Routes/report.routes.js';
import initializeModels from './Model/association.model.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/category', CategoryRouter);
app.use('/user', UserRouter);
app.use('/expense', ExpenseRouter);
app.use('/report', ReportRoutes);

initializeModels();

app.listen(5000, () => {
    console.log('Server started on http://localhost:5000');
});

