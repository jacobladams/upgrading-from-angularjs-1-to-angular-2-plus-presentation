import { PersonnelDirectory } from '../shared/personnelDirectory.service';

class PersonnelDetailsController {
  static $inject = ['$routeParams', 'personnelDirectory'];

  constructor(
    $routeParams: ng.route.IRouteParamsService,
    private personnelDirectory: PersonnelDirectory
  ) {
    const personnelId = $routeParams.id;

    personnelDirectory.setPersonnel(personnelId);
  }
}

export class PersonnelDetailsComponent implements ng.IComponentOptions {
  templateUrl = './personnel-details.component.html';
  controller = PersonnelDetailsController;
}
