describe('KeystoneApiSrvc', function() {

    var srvc;

    beforeEach(function(){

        angular.mock.module(require('.'));

        inject(function(_KeystoneApiSrvc_) {
            srvc = _KeystoneApiSrvc_;
        });

    });

    // TODO: Mock $http service with fake data
    it('getHomePage returns something', function(){

        var returnedValue = srvc.getHomePage();

        expect(returnedValue).toEqual(jasmine.any(Object));

    });

});
