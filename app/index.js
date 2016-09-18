angular.module(module.exports = 'app', [
    require('pages'),
    require('shared'),
    require('angular-route')
])
    .config(require('./router'))
;
