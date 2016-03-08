angular.module('meosApp')
    .controller('footerController', function($rootScope, $scope) {
            var footerCtrl = this;
            footerCtrl.prev = $rootScope.prevState.name;
    });