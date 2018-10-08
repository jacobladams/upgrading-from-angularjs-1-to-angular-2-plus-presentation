export class PersonnelDetailsEditComponent implements ng.IComponentOptions {
    template = require('./personnel-details-edit.component.html');
    bindings = {
        personnel: '=',
        titles: '=',
        savePersonnel: '&'
    };
}
