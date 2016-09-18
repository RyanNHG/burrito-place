module.exports = ['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider){

    $routeProvider.
        when('/', {
            template: '<welcome-page-cmpt></welcome-page-cmpt>'
        })
        .when('/oops', {
            template: '<error-page></error-page>'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);

}];
