import { PersonnelDirectory } from "../shared/personnelDirectory.service";

class PersonnelListController {

    static $inject = ['personnelDirectory'];

    constructor(public personnelDirectory: PersonnelDirectory) { 
    }
}

export class PersonnelListComponent implements ng.IComponentOptions {
    template = require('./personnel-list.component.html');
    controller = PersonnelListController;
}
