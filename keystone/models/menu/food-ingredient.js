var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var FoodIngredient = new keystone.List('FoodIngredient');
 
FoodIngredient.add({
    name: { 
        type: String, 
        required: true, 
        index: true 
    }
});

FoodIngredient.relationship({ path: 'foods', ref: 'Food', refPath: 'ingredients' });
FoodIngredient.relationship({ path: 'foodCategories', ref: 'FoodCategory', refPath: 'commonIngredients' });

FoodIngredient.register();