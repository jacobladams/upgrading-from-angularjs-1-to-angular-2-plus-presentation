// import { PersonnelDirectory } from "../shared/personnelDirectory.service";

// class PersonnelListController {

//     static $inject = ['personnelDirectory'];

//     constructor(public personnelDirectory: PersonnelDirectory) {
//     }
// }

// export class PersonnelListComponent implements ng.IComponentOptions {
//     templateUrl = './personnel-list.component.html';
//     controller = PersonnelListController;
// }



import { PersonnelDirectory } from '../shared/personnelDirectory.service';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'personnel-list',
  templateUrl: './personnel-list.component.html'
})
export class PersonnelListComponent {
    constructor(public personnelDirectory: PersonnelDirectory) {
    }
}





