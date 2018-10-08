class PersonnelListController {

    static $inject = ['personnelDirectory'];

    constructor(public personnelDirectory: PersonnelDirectory) { 
    }
}

class PersonnelListComponent implements ng.IComponentOptions {
	templateUrl = '/app/personnel-list/personnel-list.component.html';
	controller = PersonnelListController
}

angular.module('personnelDirectory').component('personnelList', new PersonnelListComponent());
