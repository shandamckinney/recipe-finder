import RecipeMessage from '../models/recipeMessage.js';

export const getRecipes = async (req, res) => {
    try {
        const recipeMessages = await RecipeMessage.find();

        console.log(recipeMessages);

        res.status(200).json(recipeMessages);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const createRecipe = async(req, res) => {
    const recipe = req.body;

    const newRecipe = new RecipeMessage(recipe);

    try{
        await newRecipe.save();

        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}