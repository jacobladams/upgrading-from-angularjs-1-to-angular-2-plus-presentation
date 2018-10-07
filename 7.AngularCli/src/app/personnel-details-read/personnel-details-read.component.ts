export class PersonnelDetailsReadComponent implements ng.IComponentOptions {
  templateUrl = './personnel-details-read.component.html';
  bindings = {
      personnel: '=',
      editPersonnel: '&'
  };
}


