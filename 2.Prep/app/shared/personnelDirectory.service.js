angular.module('personnelDirectory').factory('personnelDirectory', ['$http', function ($http) {
	var personnelApiUrl = 'http://localhost:4000/personnel';
	var titleApiUrl = 'http://localhost:4000/titles';

	var personnelDirectory = {};

	var getPersonnelPromise = $http.get(personnelApiUrl).then(function(result) {
		personnelDirectory.personnelList = result.data;
		return personnelDirectory.personnelList;
	});
	$http.get(titleApiUrl).then(function(result) {
		personnelDirectory.titles = result.data;
	});

	personnelDirectory.setPersonnel = function(id) {
		getPersonnelPromise.then(function(){
			personnelDirectory.personnel = personnelDirectory.personnelList.filter(function(personnel){
				return personnel.id == id;
			})[0]
		});
	};

	personnelDirectory.savePersonnel = function (personnel) {
		$http.post(personnelApiUrl + '/' + personnel.id, personnel).then(function () {
			personnel.isEditting = false;
		});
	};

	personnelDirectory.editPersonnel = function (personnel) {
		personnel.isEditting = true;
	};

	return personnelDirectory;
}]);