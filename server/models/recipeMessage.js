import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String, 
    rating: String, 
    ingredients: [String],
    time:  Number, 
    type: String,
    selectedFile: String,
    addToList: Boolean
});

const RecipeMessage = mongoose.model('RecipeMessage', postSchema);

export default RecipeMessage;