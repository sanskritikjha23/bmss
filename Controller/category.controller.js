import Budget from "../Model/category.model.js";
import category from "../Model/category.model.js";


export const getcateBudget = async (req, res) => {
    const { categoryName } = req.params;
    
    category.findOne({ where: { categoryName } })
    .then(category => {
        if (category) {
            res.status(200).json(category);
        } else {
            res.status(404).json({ error: "Category not found" });
        }
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    });
};


export const delcateBudget = async (req, res) => {
    const { categoryName } = req.body; // Extract categoryName from request body

    if (!categoryName) {
        return res.status(400).json({ error: "Category name is required" });
    }

    try {
        const result = await category.destroy({
            where: { categoryName }
        });

        if (result) {
            res.status(200).json({ message: "Category deleted successfully" });
        } else {
            res.status(404).json({ error: "Category not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


export const updatecateBudget = async (request, response) => {
    const { categoryName, typeOfBudget, time, usualExpenseOfMonth, limit } = request.body;

    console.log("Request body:", request.body);

    if (!categoryName) {
        console.log("Category name missing");
        return response.status(400).json({ error: "Category name is required" });
    }

    try {
        // Find the category by categoryName
        const categoryItem = await category.findOne({ where: { categoryName } });
        console.log("Category found:", categoryItem);

        if (categoryItem) {
            // Update the fields
            categoryItem.typeOfBudget = typeOfBudget || categoryItem.typeOfBudget;
            categoryItem.time = time || categoryItem.time;
            categoryItem.usualExpenseOfMonth = usualExpenseOfMonth || categoryItem.usualExpenseOfMonth;
            categoryItem.limit = limit || categoryItem.limit;

            console.log("Updated category data:", categoryItem);

            // Save the updated category
            await categoryItem.save();
            console.log("Category saved");
            response.status(200).json(categoryItem);
        } else {
            console.log("Category not found");
            response.status(404).json({ error: 'Category not found' });
        }
    } catch (error) {
        console.error("Error during update:", error);
        response.status(400).json({ error: error.message });
    }
};

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
