import Budget from "../Model/category.model.js";
import category from "../Model/category.model.js";

export const getcateBudget = async (request, response) => {
    try {
        const categories = await category.findAll(); // Adjust as necessary, use findByPk if you are looking for a specific category
        response.status(200).json({ categories });
    } catch (err) {
        console.error(err);
        response.status(500).json({ error: "Internal Server Error" });
    }
}

export const delcateBudget = async (request, response) => {
    const id = request.params.id; // Extract the ID from URL parameters

    if (!id) {
        // Check if ID is provided
        return response.status(400).json({ error: "ID is required" });
    }

    try {
        // Perform the delete operation
        const result = await category.destroy({
            where: { id }
        });

        // Check if any rows were affected
        if (result) {
            return response.status(200).json({ message: "Category Budget deleted" });
        } else {
            return response.status(404).json({ error: "Category Budget not found" });
        }
    } catch (error) {
        console.error(error); // Log the error for debugging
        return response.status(500).json({ error: "Internal Server Error" });
    }
}

export const updatecateBudget = async (request, response) => {
    try {
        const  id  = request.params.id;
        const { categoryName, typeOfBudget, time, usualExpenseOfMonth, limit } = request.body;
        const categoryItem = await category.findByPk(id);
        if (categoryItem) {
            categoryItem.categoryName = categoryName;
            categoryItem.typeOfBudget = typeOfBudget;
            categoryItem.time = time;
            categoryItem.usualExpenseOfMonth = usualExpenseOfMonth;
            categoryItem.limit = limit;
            await categoryItem.save();
            response.status(200).json(categoryItem);
        } else {
            response.status(404).json({ error: 'Budget not found' });
        }
    } catch (error) {
        console.error(error);
        response.status(400).json({ error: error.message });
    }
}
export const createcateBudget = async (req, res) => {

    try {
        const { categoryName, typeOfBudget, time, usualExpenseOfMonth, limit, userId } = req.body;

        // Create the new budget entry
        const newBudget = await Budget.create({
            categoryName,
            typeOfBudget,
            time,
            usualExpenseOfMonth,
            limit,
            userId
        });

        // Respond with the newly created budget entry
        return res.status(201).json({ message: "Budget created successfully", budget: newBudget });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
