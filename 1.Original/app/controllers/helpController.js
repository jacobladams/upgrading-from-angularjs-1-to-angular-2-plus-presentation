angular.module('personnelDirectory').controller('helpController', ['$scope', 'helpService',  function ($scope, helpService) {
    helpService.getHelp().then(function(help) {
        $scope.helpText = help.helpText;
    });
}]);