class PersonnelDetailsEditComponent implements ng.IComponentOptions {
    templateUrl = '/app/personnel-details-edit/personnel-details-edit.component.html';
    bindings = {
        personnel: '=',
        titles: '=',
        savePersonnel: '&'
    };
}

angular.module('personnelDirectory').component('personnelDetailsEdit', new PersonnelDetailsEditComponent());
