var PersonnelDetailsController = /** @class */ (function () {
    function PersonnelDetailsController($routeParams, personnelDirectory) {
        this.personnelDirectory = personnelDirectory;
        var personnelId = $routeParams.id;
        personnelDirectory.setPersonnel(personnelId);
    }
    PersonnelDetailsController.$inject = ['$routeParams', 'personnelDirectory'];
    return PersonnelDetailsController;
}());
angular.module('personnelDirectory').component('personnelDetails', {
    templateUrl: '/app/personnel-details/personnel-details.component.html',
    controller: PersonnelDetailsController
});
