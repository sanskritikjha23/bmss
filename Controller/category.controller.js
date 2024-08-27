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
    try {
        const { id } = request.body; // Assuming you're deleting by ID
        const result = await category.destroy({ where: { id } });
        if (result) {
            response.status(200).json({ message: "This Budget got deleted" });
        } else {
            response.status(404).json({ error: "This Budget not found" });
        }
    } catch (err) {
        console.error(err);
        response.status(500).json({ error: "Internal Server Error" });
    }
}

export const updatecateBudget = async (request, response) => {
    try {
        const { id } = request.body;
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

export const createcateBudget = async (request, response) => {
    try {
        const newCategory = await category.create(request.body);
        response.status(201).json({ category: newCategory });
    } catch (err) {
        console.error(err);
        response.status(400).json({ error: "Can't create...There are some issues" });
    }
}
