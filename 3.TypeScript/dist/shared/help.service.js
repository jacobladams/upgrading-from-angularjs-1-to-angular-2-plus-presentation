var HelpService = /** @class */ (function () {
    function HelpService($http) {
        this.$http = $http;
        this.helpUrl = 'http://localhost:4000/help';
    }
    HelpService.prototype.getHelp = function () {
        return this.$http.get(this.helpUrl).then(function (response) { return response.data; });
    };
    HelpService.$inject = ['$http'];
    return HelpService;
}());
angular.module('personnelDirectory').service('helpService', HelpService);
