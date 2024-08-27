import { response } from "express"
import Entertainment from "../Model/entertainment.model.js";

export const getEntertainmentBudget = async (request, response, next) => {
    const id = request.params.id; // Extract the ID from URL parameters

    try {
        // Use await to wait for the promise to resolve
        const result = await Entertainment.findByPk(id);

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


export const delEntertainmentBudget = async(request, response , next)=>{
    Entertainment.destroy(request.body.id)
    .then(result=>{
        return response.status(200).json({message:"This Budget is deleted"});
    }).catch(err=>{
        return response.status(404).json({error:"This Budget not found"})
    })
    return response.status(500).json({error:"Internal Server error"})
}

export const updateEntertainmentBudget = async (request, response, next) => {
    const id = request.params.id; // Extract the ID from URL parameters

    if (!id) {
        // Check if ID is provided
        return response.status(400).json({ error: "ID is required" });
    }

    try {
        // Find the existing entertainment budget entry by ID
        const entertainment = await Entertainment.findByPk(id);

        // Check if the entertainment budget entry exists
        if (entertainment) {
            // Update the entertainment budget entry with new data
            entertainment.typeOfBudget = request.body.typeOfBudget || entertainment.typeOfBudget;
            entertainment.time = request.body.time || entertainment.time;
            entertainment.usualExpenseOfMonth = request.body.usualExpenseOfMonth || entertainment.usualExpenseOfMonth;
            entertainment.limit = request.body.limit || entertainment.limit;

            // Save the updated entry
            await entertainment.save();

            return response.status(200).json({ message: "Budget got updated" });
        } else {
            return response.status(404).json({ error: "This Budget not found" });
        }
    } catch (err) {
        console.error(err); // Log the error for debugging
        return response.status(500).json({ error: "Internal Server Error" });
    }
};

export const createEntertainmentBudget = async (request, response, next) => {
    try {
        // Extract and validate input fields from the request body
        const { typeOfBudget, time, usualExpenseOfMonth, limit } = request.body;

        if (!typeOfBudget || !time || !usualExpenseOfMonth || !limit) {
            return response.status(400).json({ error: "All fields are required" });
        }

        // Create the entertainment budget
        const result = await Entertainment.create({
            typeOfBudget,
            time,
            usualExpenseOfMonth,
            limit,
        });

        return response.status(201).json({ message: "Entertainment budget created successfully", result });
    } catch (err) {
        console.error(err); // Log the error for debugging
        return response.status(500).json({ error: "Internal Server Error" });
    }
};
