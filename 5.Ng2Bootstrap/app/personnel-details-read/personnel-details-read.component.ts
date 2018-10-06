export class PersonnelDetailsReadComponent implements ng.IComponentOptions {
  template = require('./personnel-details-read.component.html');
  bindings = {
      personnel: '=',
      editPersonnel: '&'
  };
}


