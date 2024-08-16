import bodyParser from 'body-parser';
import express from 'express';

const app= express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/user",UserRouter);

app.listen(3000,()=>{
    console.log("Server Started...")
});