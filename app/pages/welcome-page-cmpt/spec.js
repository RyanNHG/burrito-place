describe('welcomePageCmpt', function() {

    var ctrl;

    beforeEach(function(){

        // Load module
        angular.mock.module(require('.'));

        // Initialize component
        inject(function($componentController) {
            ctrl = $componentController('welcomePageCmpt', {});
        });

    });

    

});
