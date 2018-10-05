angular.module('personnelDirectory').service('helpService', ['$resource', function ($resource) {
    this.getHelp = function(){
        var helpResource = $resource('http://localhost:4000/help');
    
        return helpResource.get().$promise;
    };
}]);