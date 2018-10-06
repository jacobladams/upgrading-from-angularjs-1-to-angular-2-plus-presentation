var PersonnelListController = /** @class */ (function () {
    function PersonnelListController(personnelDirectory) {
        this.personnelDirectory = personnelDirectory;
    }
    PersonnelListController.$inject = ['personnelDirectory'];
    return PersonnelListController;
}());
angular.module('personnelDirectory').component('personnelList', {
    templateUrl: '/app/personnel-list/personnel-list.component.html',
    controller: PersonnelListController
});
