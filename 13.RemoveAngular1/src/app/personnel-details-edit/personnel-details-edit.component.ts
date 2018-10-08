import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'personnel-details-edit',
  templateUrl: './personnel-details-edit.component.html'
})
export class PersonnelDetailsEditComponent {
  @Input() personnel: Personnel;
  @Input() titles: string[];
  @Output() savePersonnel = new EventEmitter<Personnel>();
}
