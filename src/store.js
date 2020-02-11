import {createStore} from 'redux';

var initialState = {
    name: '',
    category: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    recipes: []
};

export const ACTION_TYPES = {
    UPDATE_RECIPE_NAME: 'update_recipe_name',
    UPDATE_RECIPE_CATEGORY: 'update_recipe_category',
    UPDATE_AUTHOR_FIRST: 'update_author_first',
    UPDATE_AUTHOR_LAST: 'update_author_last',
    UPDATE_INGREDIENT_LIST: 'update_ingredient_list',
    UPDATE_INSTRUCTIONS: 'update_instructions',
    UPDATE_RECIPE_LIST: 'update_recipe_list',
    DELETE_RECIPE: 'delete_recipe'
};

var reducer = (state=initialState, action) => {
    // Deconstructors
    // Action:
    let { type, payload } = action;
    // Action Types:
    let { UPDATE_RECIPE_NAME, UPDATE_RECIPE_CATEGORY, UPDATE_AUTHOR_FIRST, UPDATE_AUTHOR_LAST, UPDATE_INGREDIENT_LIST, UPDATE_INSTRUCTIONS, UPDATE_RECIPE_LIST, DELETE_RECIPE } = ACTION_TYPES;
    // State Keys:
    let { name, category, authorFirst, authorLast, ingredients, instructions, recipes } = state;

    switch(type){
        case UPDATE_RECIPE_NAME:
            return {
                ...state,
                name: payload
            }
        case UPDATE_RECIPE_CATEGORY:
            return{
                ...state,
                category: payload
            }
        case UPDATE_AUTHOR_FIRST:
            return{
                ...state,
                authorFirst: payload
            }
        case UPDATE_AUTHOR_LAST:
            return{
                ...state,
                authorLast: payload
            }
        case UPDATE_INGREDIENT_LIST:
            var newIngredient = [...ingredients, payload];
            return{
                ...state,
                ingredients: newIngredient
            }
        case UPDATE_INSTRUCTIONS:
            var newInstructions = [...instructions, payload];
            return{
                ...state,
                instructions: newInstructions
            }
        case UPDATE_RECIPE_LIST:
            var newRecipe = {
                name,
                category,
                authorFirst,
                authorLast,
                ingredients,
                instructions
            }
            return{
                ...state,
                recipes: [...recipes, newRecipe],
                name: '',
                category: '',
                authorFirst: '',
                authorLast: '',
                ingredients: [],
                instructions: []
            }
        case DELETE_RECIPE:
            return{
                ...state,
                recipes: action.payload
            }
        default: return state;
    }
}

export default createStore(reducer);