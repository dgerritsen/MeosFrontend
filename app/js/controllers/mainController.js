angular.module('meosApp')
    .controller('mainController', function($scope, Restangular) {
            var mainCtrl = this;
            mainCtrl.keno = '';
            Restangular.all('persons').getList().then(function() {
                // All ok!
            }, function(response) {
                console.log(response);
            });
    });