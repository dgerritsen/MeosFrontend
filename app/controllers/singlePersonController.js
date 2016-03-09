angular.module('meosApp')
    .controller('singlePersonController', function($rootScope, $scope) {
            var singlePersonCtrl = this;
            singlePersonCtrl.person = $rootScope.selectedPerson;
    });