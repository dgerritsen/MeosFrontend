angular.module('meosApp')
    .controller('vehicleController', function($rootScope, $state, Restangular) {
            var vehicleCtrl = this;

            vehicleCtrl.searchLicense = function() {
                $rootScope.savedVehicle = undefined;
                $rootScope.license = _.toUpper(vehicleCtrl.license);
                $state.go('resultsVehicle.ib');
            };
    })
    .controller('resultsVehicleController', function($rootScope, $state, Restangular) {
            var resultsVehicleCtrl = this;

            if(!$rootScope.savedVehicle) {
                resultsVehicleCtrl.loaded = false;

                if($rootScope.license) {
                    Restangular.all('vehicles').getList().then(function(vehicles) {
                        resultsVehicleCtrl.vehicles = [];
                        resultsVehicleCtrl.signals = [];
                        _.forEach(vehicles, function(value) {
                            if(_.startsWith(value.license, $rootScope.license)) {
                                resultsVehicleCtrl.vehicles[resultsVehicleCtrl.vehicles.length] = value;
                                if(value.signals.length > 0) {
                                    resultsVehicleCtrl.personAlert = true;
                                }
                            }
                        });

                        $rootScope.savedVehicle = resultsVehicleCtrl.vehicle;
                        resultsVehicleCtrl.loaded = true;
                    });
                }
            } else {
                resultsVehicleCtrl.vehicle = $rootScope.savedVehicle;
                resultsVehicleCtrl.loaded = true;
            }

            resultsVehicleCtrl.select = function(vehicle) {
                $rootScope.selectedVehicle = vehicle;
                $state.go('results.vehicle');
            }
    });