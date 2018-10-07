import { UpgradeComponent } from '@angular/upgrade/static';
import { Directive, ElementRef, Injector } from "@angular/core";

export class PersonnelDetailsEditComponent implements ng.IComponentOptions {
    templateUrl = './personnel-details-edit.component.html';
    bindings = {
        personnel: '=',
        titles: '=',
        savePersonnel: '&'
    };
}

@Directive({
  selector: 'personnel-details-edit'
})
export class PersonnelDetailsEditDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector)
  {
    super('personnel-details-edit', elementRef, injector);
  }
}
