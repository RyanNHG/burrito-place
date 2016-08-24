var keystone = require('keystone'),
    User = keystone.list('User');
 
exports = module.exports = function(done) {
    
    new User.model({
        name: { first: 'Admin', last: 'User' },
        email: process.env.FIRST_EMAIL || 'admin@keystonejs.com',
        password: process.env.FIRST_PASSWORD || 'admin',
        canAccessKeystone: true
    }).save(done);
    
};