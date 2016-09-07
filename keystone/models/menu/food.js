var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var Food = new keystone.List('Food');
 
Food.add({

    name: { 
        type: String, 
        required: true, 
        index: true 
    },
    description:{
        type: Types.Markdown
    },
    price: {
        type: Types.Money,
        required: true,
        initial: true
        // TODO: Not required if category has a default price
    },

    category: { 
        type: Types.Relationship,
        required: true,
        initial: true,
        ref: 'FoodCategory'
    },
    ingredients: { 
        type: Types.Relationship, 
        ref: 'FoodIngredient', 
        many: true 
        // TODO:  Populate with default ingredients in category
    },
});
 
Food.register();