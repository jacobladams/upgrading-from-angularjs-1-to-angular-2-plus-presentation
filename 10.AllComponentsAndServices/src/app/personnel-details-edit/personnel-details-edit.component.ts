// import { UpgradeComponent } from '@angular/upgrade/static';
// import { Directive, ElementRef, Injector, Input, Output, EventEmitter } from '@angular/core';

// export class PersonnelDetailsEditComponent implements ng.IComponentOptions {
//     template = require('./personnel-details-edit.component.html');
//     bindings = {
//         personnel: '=',
//         titles: '=',
//         savePersonnel: '&'
//     };
// }

// @Directive({
//   selector: 'personnel-details-edit'
// })
// export class PersonnelDetailsEditDirective extends UpgradeComponent {
//   @Input() personnel: Personnel;
//   @Input() titles: string[];
//   @Output() savePersonnel: EventEmitter<Personnel>;

//   constructor(elementRef: ElementRef, injector: Injector){
//     super('personnelDetailsEdit', elementRef, injector);
//   }
// }

import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'personnel-details-edit',
  templateUrl: './personnel-details-edit.component.html'
})
export class PersonnelDetailsEditComponent {
  @Input() personnel: Personnel;
  @Input() titles: string[];
  @Output() savePersonnel = new EventEmitter<Personnel>();
}
