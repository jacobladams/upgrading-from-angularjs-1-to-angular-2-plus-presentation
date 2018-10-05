angular.module('personnelDirectory').component('personnelDetails', {
    templateUrl: '/app/personnel-details/personnel-details.component.html',
    controller: ['$routeParams', 'personnelDirectory',  function ( $routeParams, personnelDirectory) {
        var $ctrl = this;
		
		var personnelId = $routeParams.id;

		console.log(personnelId);

		personnelDirectory.setPersonnel(personnelId);
	
		$ctrl.personnelDirectory = personnelDirectory;
    }]
});




