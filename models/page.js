var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var Page = new keystone.List('Page');
 
Page.add(

    {
        name: { 
            type: String, 
            required: true, 
            index: true 
        }
    },

    'Top Links',
    {
        topLinks: {
            type: Types.Relationship,
            ref: 'Link',
            many: true
        }
    },

    'Intro Panel',
    {
        header: { 
            type: String 
        },
        subHeader: { 
            type: String 
        },
    },

    'Featured Food',
    {
        foodHeader: {
            type: String
        },
        foods: {
            type: Types.Relationship,
            ref: 'Food', 
            many: true 
        }
    },

    'Our Story',
    {
        storyHeader: {
            type: String
        },
        storyPhoto: {
            type: Types.Url
        },
        storyBody: {
            type: Types.Markdown
        }
    },

    'Featured People',
    {
        peopleHeader: {
            type: String
        },
        people: {
            type: Types.Relationship,
            ref: 'User', 
            many: true 
        }
    },

    'Bottom Links',
    {
        footerLinks: {
            type: Types.Relationship,
            ref: 'Link',
            many: true
        }
    }

);
 
Page.register();