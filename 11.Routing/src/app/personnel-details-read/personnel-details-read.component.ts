// export class PersonnelDetailsReadComponent implements ng.IComponentOptions {

// template = require('./personnel-details-read.component.html');
//   bindings = {
//       personnel: '=',
//       editPersonnel: '&'
//   };
// }

import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'personnel-details-read',
  templateUrl: './personnel-details-read.component.html'
})
export class PersonnelDetailsReadComponent {
  @Input() personnel: Personnel;
  @Output() editPersonnel = new EventEmitter<Personnel>();
}






