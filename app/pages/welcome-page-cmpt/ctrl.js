module.exports = ['KeystoneApiSrvc', '$sce', function(KeystoneApiSrvc, $sce){

    var $ctrl = this;

    $ctrl.onInit = function(){

        KeystoneApiSrvc.getHomePage().then(function(data){
            $ctrl.data = data;
        });

    };

    $ctrl.trustAsHtml = $sce.trustAsHtml;

}];
