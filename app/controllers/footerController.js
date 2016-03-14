angular.module('meosApp')
    .controller('footerController', function($rootScope, $scope) {
            var footerCtrl = this;
            footerCtrl.prev = $rootScope.prevState.name;
            $rootScope.$watch('selectedPerson', function() {
                if($rootScope.selectedPerson) {
                    footerCtrl.personActive = true;
                } else {
                    footerCtrl.personActive = false;
                }
            });

            $rootScope.$watch('selectedVehicle', function() {
                if($rootScope.selectedVehicle) {
                    footerCtrl.vehicleActive = true;
                } else {
                    footerCtrl.vehicleActive = false;
                }
            });

    });