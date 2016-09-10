angular.module('burritoPlaceApp', [])

    .service('KeystoneService', ['$http', function($http){

        var srvc = this;

        srvc.data = {};

        srvc.getHomePage = function(){

            return $http.get('http://localhost:3000/api/home-page')
                .then(function(result){
                    console.log(result.data);
                    return result;
                });

        };

    }])

    .controller('HomePageCtrl', ['$scope', '$sce', 'KeystoneService', function($scope, $sce, KeystoneService){

        $scope.onInit = function(){
         
            KeystoneService.getHomePage().then(function(result){
                $scope.ctrl = result.data;
            });

        };

        $scope.trustAsHtml = $sce.trustAsHtml;

    }])