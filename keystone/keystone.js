var keystone = require('keystone');

if(process.env.NODE_ENV != 'production') {
	require('dotenv').load();
	console.log(process.env);
}

keystone.init({
	
	'name': process.env.SITE_NAME || 'Burrito Place',
	
	'favicon': 'public/favicon.ico',
	
	'auto update': true,
	'mongo': process.env.MONGO_URI || 'mongodb://mongo/keystone',
	
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': 'cookie-secret'
	
});
 
require('./models');
 
keystone.set('routes', require('./routes'));

keystone.set('nav', {
	'menu': ['food', 'food-category', 'food-ingredient'],
	'user': 'user'
})
 
keystone.start();
