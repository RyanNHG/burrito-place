angular.module('burritoPlaceApp', [])

    .service('KeystoneService', ['$http', function($http){

        var srvc = this;

        srvc.data = {};

        srvc.getHomePage = function(){

            return $http.get('http://localhost:3000/api/home-page')
                .then(function(result){
                    console.log(result);
                    return result;
                });

        };

    }])

    .controller('HomePageCtrl', ['$scope', 'KeystoneService', function($scope, KeystoneService){

        $scope.ctrl = {};
        var ctrl = $scope.ctrl;

        KeystoneService.getHomePage();

    }])