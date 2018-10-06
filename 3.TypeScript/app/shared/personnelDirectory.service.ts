class PersonnelDirectory {

	private personnelApiUrl = 'http://localhost:4000/personnel';
	private titleApiUrl = 'http://localhost:4000/titles';

	personnelList: Personnel[];
	personnel: Personnel;
	getPersonnelPromise: ng.IPromise<Personnel[]>

	titles: string[];

	static $inject = ['$http'];
	constructor(private $http: ng.IHttpService) {
		this.getPersonnelPromise = $http.get<Personnel[]>(this.personnelApiUrl).then(result => {
			this.personnelList = result.data;
			return this.personnelList;
		});
		$http.get<string[]>(this.titleApiUrl).then(result => {
			this.titles = result.data;
		});
	} 

	setPersonnel(id) {
		this.getPersonnelPromise.then(()=> {
			this.personnel = this.personnelList.filter(personnel=> personnel.id == id)[0];
		});
	}

	savePersonnel (personnel) {
		this.$http.post(`${this.personnelApiUrl}/${personnel.id}`, personnel).then(function () {
			personnel.isEditting = false;
		});
	}

	editPersonnel(personnel) {
		personnel.isEditting = true;
	}
}

angular.module('personnelDirectory').service('personnelDirectory', PersonnelDirectory);