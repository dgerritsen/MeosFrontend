angular.module('meosApp')
    .controller('searchController', function($rootScope, $scope, $state) {
            var searchCtrl = this;

            searchCtrl.search = function() {
                console.log('test');
                $state.go('results');
            };

            $scope.$watch(angular.bind(this, function() {
                return this.keno;
            }), function(newVal) {
                $rootScope.keno = newVal;
                console.log('Keno: ', newVal);
            })
    });