angular.module('personnelDirectory').component('personnelDetailsRead', {
    templateUrl: '/app/personnel-details-read/personnel-details-read.component.html',
    bindings: {
		personnel: '=',
		editPersonnel: '&'
    }
});

