var keystone = require('keystone');

keystone.init({

    'name': 'Burrito Place',

    'static': ['public', 'node_modules'],

    'views': 'templates/views',
    'view engine': 'jade',

    'auto update': true,
    'mongo': process.env.MONGO_URI || 'mongodb://localhost/burrito-place',

    'session': true,
    'auth': true,
    'user model': 'User',
    'cookie secret': process.env.COOKIE_SECRET || 'COOKIE_SECRET'

});

require('./models');

keystone.set('routes', require('./routes'));

keystone.start();