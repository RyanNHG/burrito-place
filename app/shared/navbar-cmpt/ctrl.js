module.exports = ['KeystoneApiSrvc', function(KeystoneApiSrvc){

    var $ctrl = this;

    $ctrl.onInit = function(){

      KeystoneApiSrvc.getNavLinks().then(function(result) {
        $ctrl.links = result;
      });

    };


}];
