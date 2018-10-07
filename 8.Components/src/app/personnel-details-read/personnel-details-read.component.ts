import { Component, Input, Output, EventEmitter } from "@angular/core";

// export class PersonnelDetailsReadComponent implements ng.IComponentOptions {
//   templateUrl = './personnel-details-read.component.html';
//   bindings = {
//       personnel: '=',
//       editPersonnel: '&'
//   };
// }



@Component({
  selector: 'personnel-details-read',
  templateUrl: './personnel-details-read.component.html'
})
export class PersonnelDetailsReadComponent {
  @Input() personnel: Personnel;
  @Output() editPersonnel = new EventEmitter<Personnel>();
}


