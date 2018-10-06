class PersonnelListController {

    static $inject = ['personnelDirectory'];

    constructor(public personnelDirectory: PersonnelDirectory) { 
    }
}

angular.module('personnelDirectory').component('personnelList', {
    templateUrl: '/app/personnel-list/personnel-list.component.html',
    controller: PersonnelListController
});