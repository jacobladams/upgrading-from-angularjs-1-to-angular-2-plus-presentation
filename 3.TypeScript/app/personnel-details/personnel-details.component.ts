class PersonnelDetailsController {   
    
    static $inject = ['$routeParams', 'personnelDirectory'];

    constructor($routeParams: ng.route.IRouteParamsService, private personnelDirectory: PersonnelDirectory) {
        const personnelId = $routeParams.id;

        personnelDirectory.setPersonnel(personnelId);
    }
}

class PersonnelDetailsComponent implements ng.IComponentOptions {
    templateUrl = '/app/personnel-details/personnel-details.component.html';
    controller = PersonnelDetailsController
}

angular.module('personnelDirectory').component('personnelDetails', new PersonnelDetailsComponent());