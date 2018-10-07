import { ElementRef, Injector, Directive } from "@angular/core";
import { UpgradeComponent } from "@angular/upgrade/static";

export class PersonnelDetailsReadComponent implements ng.IComponentOptions {
  templateUrl = './personnel-details-read.component.html';
  bindings = {
      personnel: '=',
      editPersonnel: '&'
  };
}


@Directive({
  selector: 'personnel-details-read'
})
export class PersonnelDetailsReadDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector)
  {
    super('personnel-details-read', elementRef, injector);
  }
}



