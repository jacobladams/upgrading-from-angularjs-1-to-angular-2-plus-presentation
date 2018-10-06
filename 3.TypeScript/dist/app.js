angular.module('personnelDirectory', ['ngRoute']);
angular.module('personnelDirectory').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/personnel', {
            template: '<personnel-list></personnel-list>'
        }).
            when('/personnel/:id', {
            template: '<personnel-details></personnel-details>'
        }).
            when('/help', {
            template: '<help></help>'
        }).
            otherwise({
            redirectTo: '/personnel'
        });
        $locationProvider.html5Mode(false);
    }]);
angular.element(document).ready(function () {
    angular.bootstrap(document.body, ['personnelDirectory']);
});
