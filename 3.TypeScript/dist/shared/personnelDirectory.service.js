var PersonnelDirectory = /** @class */ (function () {
    function PersonnelDirectory($http) {
        var _this = this;
        this.$http = $http;
        this.personnelApiUrl = 'http://localhost:4000/personnel';
        this.titleApiUrl = 'http://localhost:4000/titles';
        this.getPersonnelPromise = $http.get(this.personnelApiUrl).then(function (result) {
            _this.personnelList = result.data;
            return _this.personnelList;
        });
        $http.get(this.titleApiUrl).then(function (result) {
            _this.titles = result.data;
        });
    }
    PersonnelDirectory.prototype.setPersonnel = function (id) {
        var _this = this;
        this.getPersonnelPromise.then(function () {
            _this.personnel = _this.personnelList.find(function (personnel) { return personnel.id == id; });
        });
    };
    PersonnelDirectory.prototype.savePersonnel = function (personnel) {
        this.$http.post(this.personnelApiUrl + "/" + personnel.id, personnel).then(function () {
            personnel.isEditting = false;
        });
    };
    PersonnelDirectory.prototype.editPersonnel = function (personnel) {
        personnel.isEditting = true;
    };
    PersonnelDirectory.$inject = ['$http'];
    return PersonnelDirectory;
}());
angular.module('personnelDirectory').service('personnelDirectory', PersonnelDirectory);
