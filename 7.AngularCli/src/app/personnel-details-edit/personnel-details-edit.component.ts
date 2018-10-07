export class PersonnelDetailsEditComponent implements ng.IComponentOptions {
    templateUrl = './personnel-details-edit.component.html';
    bindings = {
        personnel: '=',
        titles: '=',
        savePersonnel: '&'
    };
}
