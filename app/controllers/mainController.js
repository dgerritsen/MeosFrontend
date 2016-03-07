angular.module('meosApp')
    .controller('mainController', function($scope, Restangular) {
            var mainCtrl = this;
            mainCtrl.keno = '';
            mainCtrl.persons = Restangular.all('persons').getList().$object;

            function searchKeno(keno) {

            }

            $scope.$watch(function() {
                return mainCtrl.keno;
            }, function(value) {
                searchKeno(value);
            })
    });