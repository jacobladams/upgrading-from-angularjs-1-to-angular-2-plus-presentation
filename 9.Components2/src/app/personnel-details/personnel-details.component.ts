// import { PersonnelDirectory } from '../shared/personnelDirectory.service';

// class PersonnelDetailsController {
//   static $inject = ['$routeParams', 'personnelDirectory'];

//   constructor(
//     $routeParams: ng.route.IRouteParamsService,
//     private personnelDirectory: PersonnelDirectory
//   ) {
//     const personnelId = $routeParams.id;

//     personnelDirectory.setPersonnel(personnelId);
//   }
// }

// export class PersonnelDetailsComponent implements ng.IComponentOptions {
//   templateUrl = './personnel-details.component.html';
//   controller = PersonnelDetailsController;
// }




import { PersonnelDirectory } from '../shared/personnelDirectory.service';
import { Component, Inject } from '@angular/core';



@Component({
  selector: 'personnel-details',
  templateUrl: './personnel-details.component.html'
})
export class PersonnelDetailsComponent {

  constructor(
    @Inject('$routeParams')$routeParams: ng.route.IRouteParamsService,
    @Inject('personnelDirectory')private personnelDirectory: PersonnelDirectory
  ) {
    const personnelId = $routeParams.id;

    personnelDirectory.setPersonnel(personnelId);
  }
}
