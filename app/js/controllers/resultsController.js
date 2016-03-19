angular.module('meosApp')
    .controller('resultsController', function($rootScope, $scope, $state, $filter, Restangular) {
            var resultsCtrl = this;
            var selectedPerson = $rootScope.selectedPerson;
            if(!$rootScope.savedSearchResults) {
                resultsCtrl.loaded = false;

                if($rootScope.keno) {
                    Restangular.all('persons').getList().then(function(persons) {
                        resultsCtrl.persons = [];
                        resultsCtrl.signals = [];
                        _.forEach(persons, function(value) {
                            var clean_value = _.toLower(_.trim(value.keno));
                            if(_.startsWith(clean_value, $rootScope.keno)) {
                                resultsCtrl.persons[resultsCtrl.persons.length] = value;
                                if(value.signals.length > 0) {
                                    resultsCtrl.personAlert = true;
                                }
                            }
                        });

                        $rootScope.savedSearchResults = resultsCtrl.persons;
                        resultsCtrl.loaded = true;
                    });
                }
            } else {
                resultsCtrl.persons = $rootScope.savedSearchResults;
                resultsCtrl.loaded = true;
            }

            resultsCtrl.select = function(person) {
                $rootScope.selectedPerson = person;
                $state.go('results.person');
            }
    });