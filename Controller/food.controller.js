import { request } from "express";
import Food from "../Model/Food.model.js"

export const getFoodBudget= async(request, response, next)=>{
const id=request.params.id;
    try{
        const result= await  Food.findOne({where :{id}});
        if(result){
         return response.status(200).json({result})
        }
        else{
            return response.status(404).json({error:"This Budget not found "});
        }
    }
    catch(err){
        console.log(err)
        return response.status(500).json({error:"Internal Server Error"});
    }  
}
export const delFoodBudget = async (request, response, next) => {
    const id = request.params.id; // Extract the ID from URL parameters

    if (!id) {
        // Check if ID is provided
        return response.status(400).json({ error: "ID is required" });
    }

    try {
        // Perform the delete operation
        const result = await Food.destroy({
            where: { id }
        });

        // Check if any rows were affected
        if (result) {
            return response.status(200).json({ message: "Food Budget deleted" });
        } else {
            return response.status(404).json({ error: "Food Budget not found" });
        }
    } catch (error) {
        console.error(error); // Log the error for debugging
        return response.status(500).json({ error: "Internal Server Error" });
    }
};

    export const updateFoodBudget = async (request, response, next) => {
        const id = request.params.id; // Extract the ID from URL parameters
    
        if (!id) {
            // Check if ID is provided
            return response.status(400).json({ error: "ID is required" });
        }
    
        try {
            // Find the existing food budget entry by ID
            const food = await Food.findByPk(id);
    
            // Check if the food budget entry exists
            if (food) {
                // Update the food budget entry with new data
                food.typeOfBudget = request.body.typeOfBudget || food.typeOfBudget;
                food.time = request.body.time || food.time;
                food.usualExpenseOfMonth = request.body.usualExpenseOfMonth || food.usualExpenseOfMonth;
                food.limit = request.body.limit || food.limit; // Assuming 'limit' is also part of the request body
    
                // Save the updated entry
                await food.save();
    
                return response.status(200).json({ message: "This Budget got updated" });
            } else {
                return response.status(404).json({ error: "This Budget not found" });
            }
        } catch (err) {
            console.error(err); // Log the error for debugging
            return response.status(500).json({ error: "Internal Server Error" });
        }
    };

export const createFoodBudget = async (request, response, next) => {
    try {
        const { typeOfBudget, time, usualExpenseOfMonth, limit } = request.body;

        // Validate input
        if (!typeOfBudget || !time || !usualExpenseOfMonth || !limit) {
            return response.status(400).json({ error: "All fields are required" });
        }

        // Create the food budget
        const result = await Food.create({
            typeOfBudget,
            time,
            usualExpenseOfMonth,
            limit,
        });

        return response.status(201).json({ message: "Your Budget got created", result });
    } catch (err) {
        console.error(err); // Log the error
        return response.status(500).json({ error: "Internal Server Error" });
    }
};