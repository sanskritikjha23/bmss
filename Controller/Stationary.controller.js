import { where } from "sequelize"
import Stationary from "../Model/stationary.model.js"

export const getStationaryBudget = async (request, response, next) => {
    const id = request.params.id; // Extract the ID from URL parameters

    try {
        // Use await to wait for the promise to resolve
        const result = await Stationary.findByPk(id);

        // Check if the result was found
        if (result) {
            return response.status(200).json({ result });
        } else {
            return response.status(404).json({ error: "This Budget not found" });
        }
    } catch (err) {
        console.error(err); // Log the error for debugging
        return response.status(500).json({ error: "Internal Server Error" });
    }
};

export const delStationaryBudget= async(request, response, next)=>{
    Stationary.destroy()
    .then(res=>{
        return response.status(200).json({message:"This Budget got deleted"})
    }).catch(err=>{
        return response.status(404).json({error:"This Budget not found"})
    })
    return response.status(500).json({error:"Internal Server Error"})
}

export const updateStationaryBudget = async (request, response, next) => {
    const id = request.params.id; // Extract the ID from URL parameters

    if (!id) {
        // Check if ID is provided
        return response.status(400).json({ error: "ID is required" });
    }

    try {
        // Find the existing stationary budget entry by ID
        const stationary = await Stationary.findByPk(id);

        // Check if the stationary budget entry exists
        if (stationary) {
            // Update the stationary budget entry with new data
            stationary.typeOfBudget = request.body.typeOfBudget || stationary.typeOfBudget;
            stationary.time = request.body.time || stationary.time;
            stationary.usualExpenseOfMonth = request.body.usualExpenseOfMonth || stationary.usualExpenseOfMonth;
            stationary.limit = request.body.limit || stationary.limit;

            // Save the updated entry
            await stationary.save();

            return response.status(200).json({ message: "Budget got updated" });
        } else {
            return response.status(404).json({ error: "This Budget not found" });
        }
    } catch (err) {
        console.error(err); // Log the error for debugging
        return response.status(500).json({ error: "Internal Server Error" });
    }
};

export const createStationaryBudget = async (request, response, next) => {
    try {
        // Extract and validate input fields from the request body
        const { typeOfBudget, time, usualExpenseOfMonth, limit } = request.body;

        if (!typeOfBudget || !time || !usualExpenseOfMonth || !limit) {
            return response.status(400).json({ error: "All fields are required" });
        }

        // Create the stationary budget
        const result = await Stationary.create({
            typeOfBudget,
            time,
            usualExpenseOfMonth,
            limit,
        });

        return response.status(201).json({ message: "Stationary budget created successfully", result });
    } catch (err) {
        console.error(err); // Log the error for debugging
        return response.status(500).json({ error: "Internal Server Error" });
    }
};
