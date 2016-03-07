var app = angular.module('meosApp', ['ngRoute', 'restangular'])
    .value('apiUrl', 'https://cryptic-sands-23820.herokuapp.com/')
    .service('mainService', function(apiUrl) {
            var self = this;
            return apiUrl;
    })
    .config(function($routeProvider) {

        var resolveProjects = {
            projects: function (mainService) {
                return mainService;
            }
        };

        $routeProvider
                .when('/', {
                    controller: 'mainController as mainCtrl',
                    templateUrl: 'views/mainView.html',
                    resolve: resolveProjects
                })
                .when('/test', {
                    controller: 'mainController as mainCtrl',
                    templateUrl: 'views/testView.html',
                    resolve: resolveProjects
                })
                .otherwise({
                    redirectTo: '/'
                });
    });

angular.module('meosApp').config(function(RestangularProvider){
   RestangularProvider.setBaseUrl('http://cryptic-sands-23820.herokuapp.com/');
});