angular.module('personnelDirectory').service('helpService', ['$http', function ($http) {
    var helpUrl = 'http://localhost:4000/help';
    

    this.getHelp = function(){
        return $http.get(helpUrl).then(function(response){
            return response.data;
        });
    };
}]);