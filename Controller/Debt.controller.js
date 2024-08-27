import Debt from "../Model/debt.model.js";

export const getDebtBudget = async (request, response, next) => {
    const id = request.params.id; // Extract the ID from URL parameters

    try {
        // Use await to wait for the promise to resolve
        const result = await Debt.findByPk(id);

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

export const delDebtBudget= async(request, response, next)=>{
    Debt.destroy()
    .then(res=>{
        return response.status(200).json({message:"Budget got deleted"})
    }).catch(err=>{
        return response.status(404).json({error:"This Budget not found"})
    })
    return response.status(500).json({error:"Internal Server Error"})
}

export const updateDebtBudget = async (request, response, next) => {
    const id = request.params.id; // Extract the ID from URL parameters

    if (!id) {
        // Check if ID is provided
        return response.status(400).json({ error: "ID is required" });
    }

    try {
        // Find the existing debt budget entry by ID
        const debt = await Debt.findByPk(id);

        // Check if the debt budget entry exists
        if (debt) {
            // Update the debt budget entry with new data
            debt.typeOfBudget = request.body.typeOfBudget || debt.typeOfBudget;
            debt.time = request.body.time || debt.time;
            debt.usualExpenseOfMonth = request.body.usualExpenseOfMonth || debt.usualExpenseOfMonth;
            debt.limit = request.body.limit || debt.limit;

            // Save the updated entry
            await debt.save();

            return response.status(200).json({ message: "Budget got updated" });
        } else {
            return response.status(404).json({ error: "This Budget not found" });
        }
    } catch (err) {
        console.error(err); // Log the error for debugging
        return response.status(500).json({ error: "Internal Server Error" });
    }
};

export const createDebtBudget = async (request, response, next) => {
    try {
        // Extract and validate input fields from the request body
        const { typeOfBudget, time, usualExpenseOfMonth, limit } = request.body;

        if (!typeOfBudget || !time || !usualExpenseOfMonth || !limit) {
            return response.status(400).json({ error: "All fields are required" });
        }
        // Create the debt budget
        const result = await Debt.create({
            typeOfBudget,
            time,
            usualExpenseOfMonth,
            limit,
        });

        return response.status(201).json({ message: "Debt budget created successfully", result });
    } catch (err) {
        console.error(err); // Log the error for debugging
        return response.status(500).json({ error: "Internal Server Error" });
    }
};
