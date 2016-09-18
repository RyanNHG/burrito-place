module.exports = ['$http',
function($http){

  var srvc = this;

  var url = 'http://localhost:3000';
  var DEBUG_API = true;

  var get = function(endpoint){

    return $http.get(url + endpoint).then(function(result){
      if(DEBUG_API) console.log(result);
      return result.data;
    });

  };

  srvc.getHomePage = function(){

      return get('/api/home-page');

  };

  srvc.getNavLinks = function(){

    return get('/api/navbar-links');

  };

}];
