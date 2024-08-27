import Transport from "../Model/transport.model.js";

export const getTransport = async (request, response, next) => {
    const id = request.params.id; // Extract the ID from URL parameters

    try {
        // Use await to ensure the promise resolves
        const result = await Transport.findByPk(id);

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


export const delTransport = async (request, response, next) => {
    const id = request.params.id; // Extract the ID from URL parameters

    if (!id) {
        // Check if ID is provided
        return response.status(400).json({ error: "ID is required" });
    }

    try {
        // Perform the delete operation
        const result = await Transport.destroy({
            where: { id }
        });

        // Check if any rows were affected
        if (result) {
            return response.status(200).json({ message: "This budget is deleted" });
        } else {
            return response.status(404).json({ error: "This Budget not found" });
        }
    } catch (err) {
        console.error(err); // Log the error for debugging
        return response.status(500).json({ error: "Internal Server Error" });
    }
};
export const updateTransport = async (request, response, next) => {
    const id = request.params.id; // Extract the ID from URL parameters

    if (!id) {
        // Check if ID is provided
        return response.status(400).json({ error: "ID is required" });
    }
    try {
        // Find the existing transport budget entry by ID
        const transport = await Transport.findByPk(id);

        // Check if the transport budget entry exists
        if (transport) {
            // Update the transport budget entry with new data
            transport.typeOfBudget = request.body.typeOfBudget || transport.typeOfBudget;
            transport.time = request.body.time || transport.time;
            transport.usualExpenseOfMonth = request.body.usualExpenseOfMonth || transport.usualExpenseOfMonth;
            transport.limit = request.body.limit || transport.limit;

            // Save the updated entry
            await transport.save();

            return response.status(200).json({ message: "Budget got updated" });
        } else {
            return response.status(404).json({ error: "This Budget not found" });
        }
    } catch (err) {
        console.error(err); // Log the error for debugging
        return response.status(500).json({ error: "Internal Server Error" });
    }
};

export const createTransport = async (request, response, next) => {
    try {
        // Extract and validate input fields from the request body
        const { typeOfBudget, time, usualExpenseOfMonth, limit } = request.body;

        if (!typeOfBudget || !time || !usualExpenseOfMonth || !limit) {
            console.log(err);
            return response.status(400).json({ error: "All fields are required" });
        }

        // Create the transport budget
        const result = await Transport.create({
            typeOfBudget,
            time,
            usualExpenseOfMonth,
            limit,
        });

        return response.status(201).json({ message: "Transport budget created successfully", result });
    } catch (err) {
        console.error(err); // Log the error for debugging
        return response.status(500).json({ error: "Internal Server Error" });
    }
};
