class PersonnelDetailsController {   
    
    static $inject = ['$routeParams', 'personnelDirectory'];

    constructor($routeParams: ng.route.IRouteParamsService, private personnelDirectory: PersonnelDirectory) {
        const personnelId = $routeParams.id;

        personnelDirectory.setPersonnel(personnelId);
    }
}
    
angular.module('personnelDirectory').component('personnelDetails', {
    templateUrl: '/app/personnel-details/personnel-details.component.html',
    controller: PersonnelDetailsController
});