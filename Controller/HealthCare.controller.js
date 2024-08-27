import { response } from "express"
import { where } from "sequelize"
import Healthcare from "../Model/healthcare.model.js";

export const getHealthCareBudget = async (request, response, next) => {
    const id = request.params.id; // Extract the ID from URL parameters

    try {
        // Use await to wait for the promise to resolve
        const result = await HealthCare.findByPk(id);

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

export const delHealthCareBudget= async(request, response, next)=>{
    HealthCare.destroy()
    .then(res=>{
        return response.status(200).json({message:"This Budget got deleted"})
    })
    .catch(err=>{
        return response.status(400).json({error:"This Budget not found"})
    })
    return response.status(500).json({error:"Internal server Error"})
}
export const updateHealthCareBudget = async (request, response, next) => {
const id = request.params.id; // Extract the ID from URL parameters

    if (!id) {
        // Check if ID is provided
        return response.status(400).json({ error: "ID is required" });
    }

    try {
        // Find the existing healthcare budget entry by ID
        const healthCare = await HealthCare.findByPk(id);

        // Check if the healthcare budget entry exists
        if (healthCare) {
            // Update the healthcare budget entry with new data
            healthCare.typeOfBudget = request.body.typeOfBudget || healthCare.typeOfBudget;
            healthCare.time = request.body.time || healthCare.time;
            healthCare.usualExpenseOfMonth = request.body.usualExpenseOfMonth || healthCare.usualExpenseOfMonth;
            healthCare.limit = request.body.limit || healthCare.limit;

            // Save the updated entry
            await healthCare.save();

            return response.status(200).json({ message: "Budget got updated" });
        } else {
            return response.status(404).json({ error: "This Budget not found" });
        }
    } catch (err) {
        console.error(err); // Log the error for debugging
        return response.status(500).json({ error: "Internal Server Error" });
    }
};
export const createHealthCareBudget = async (request, response, next) => {
    try {
        // Extract and validate input fields from the request body
        const { typeOfBudget, time, usualExpenseOfMonth, limit } = request.body;

        if (!typeOfBudget || !time || !usualExpenseOfMonth || !limit) {
            return response.status(400).json({ error: "All fields are required" });
        }

        // Create the healthcare budget
        const result = await HealthCare.create({
            typeOfBudget,
            time,
            usualExpenseOfMonth,
            limit,
        });

        return response.status(201).json({ message: "Healthcare budget created successfully", result });
    } catch (err) {
        console.error(err); // Log the error for debugging
        return response.status(500).json({ error: "Internal Server Error" });
    }
};
