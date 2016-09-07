var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var FoodCategory = new keystone.List('FoodCategory');
 
FoodCategory.add({
    name: { 
        type: String, 
        required: true, 
        index: true 
    },
    commonIngredients: { 
        type: Types.Relationship, 
        ref: 'FoodIngredient', 
        many: true 
    },
    commonPrice: {
        type: Types.Money 
    },
});

FoodCategory.relationship({ path: 'foods', ref: 'Food', refPath: 'category' });
 
FoodCategory.register();