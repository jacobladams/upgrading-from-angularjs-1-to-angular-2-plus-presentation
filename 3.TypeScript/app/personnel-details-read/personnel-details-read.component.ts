class PersonnelDetailsReadComponent implements ng.IComponentOptions {
	templateUrl =	'/app/personnel-details-read/personnel-details-read.component.html';
	bindings = {
		personnel: '=',
		editPersonnel: '&'
	};
}

angular.module('personnelDirectory').component('personnelDetailsRead', new PersonnelDetailsReadComponent());
