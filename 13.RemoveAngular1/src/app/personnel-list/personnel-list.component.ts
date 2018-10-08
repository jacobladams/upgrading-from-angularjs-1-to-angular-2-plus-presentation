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





