var keystone = require('keystone'),
    importRoutes = keystone.importer(__dirname);

// Handle 404 errors
keystone.set('404', function(req, res, next) {
    res.notfound();
});

// Handle other errors
keystone.set('500', function(err, req, res, next) {
    var title, message;
    if (err instanceof Error) {
        message = err.message;
        err = err.stack;
    }
    res.err(err, title, message);
});

// Load Routes
var routes = {
    api: importRoutes('./api')
};

// Allow access from everywhere because security is nah.
keystone.pre('routes', function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Bind Routes
exports = module.exports = function(app) {

    app.get('/', routes.api.index);
    app.get('/api/home-page', routes.api['home-page']);
    app.get('/api/navbar-links', routes.api['navbar-links']);

};
