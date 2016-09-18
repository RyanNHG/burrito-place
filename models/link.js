var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var Link = new keystone.List('Link');
 
Link.add({

    name: { 
        type: String, 
        required: true, 
        index: true 
    },
    url: {
        type: String,
        required: true,
        initial: true
    },
    icon: { 
        type: String 
    }
});
 
Link.register();