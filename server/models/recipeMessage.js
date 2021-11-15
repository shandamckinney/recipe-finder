import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String, 
    rating: String, 
    ingredients: String,
    time: String, 
    type: String,
    addToList: String
});

const RecipeMessage = mongoose.model('RecipeMessage', postSchema);

export default RecipeMessage;