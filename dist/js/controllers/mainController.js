angular.module('meosApp')
    .controller('mainController', function($scope, $state, Restangular, localStorageService) {
            var mainCtrl = this;
            mainCtrl.keno = '';
            Restangular.all('persons').getList().then(function() {
                // All ok!
            }, function(response) {
                if(response.status == 401 || response.status == 403) {
                    if(!localStorageService.get('token')) {
                        $state.go('login');
                    } else {

                    }
                }
            });
    });