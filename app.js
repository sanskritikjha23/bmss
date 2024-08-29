import express from 'express';
import bodyParser from 'body-parser';
import CategoryRouter from "./Routes/category.routes.js";
import DebtRouter from "./Routes/Debt.routes.js";
import EntertainmentRouter from "./Routes/Entertainment.routes.js";
import FoodRouter from "./Routes/food.routes.js";
import HealthcareRouter  from "./Routes/Healthcare.routes.js";
import StationaryRouter from "./Routes/Stationary.routes.js";
import TransportRouter from "./Routes/transport.routes.js";
import UserRouter from "./Routes/user.router.js";
import ExpenseRouter from './Routes/expense.routes.js';
import ReportRouter from './Routes/report.routes.js';
import cors from 'cors';

const app= express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.json())
app.use(cors());

app.use("/category", CategoryRouter);
app.use("/debt", DebtRouter);
app.use("/entertainment", EntertainmentRouter);
app.use("/food", FoodRouter);
app.use("/healthcare", HealthcareRouter);
app.use("/stationary", StationaryRouter);
app.use("/transport", TransportRouter);
app.use("/user", UserRouter);
app.use('/expense', ExpenseRouter);
app.use('/report', ReportRouter);

app.listen(5000,()=>{
    console.log("Server Started...")
});


