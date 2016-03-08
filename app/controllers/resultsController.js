angular.module('meosApp')
    .controller('resultsController', function($rootScope, $scope, $filter, Restangular) {
            var resultsCtrl = this;
            if($rootScope.keno) {
                console.log('Keno found!', $rootScope.keno);
                resultsCtrl.keno = $rootScope.keno;
                resultsCtrl.persons = Restangular.all('persons').getList().$object;
            }
    });