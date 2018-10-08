

import * as angular from 'angular';

import 'angular-route';

import {HelpComponent} from './help/help.component';
import {NavBarComponent} from './navbar/navbar.component';
import { PersonnelListComponent } from './personnel-list/personnel-list.component';
import { PersonnelDetailsComponent } from './personnel-details/personnel-details.component';
import { HelpService } from './shared/help.service';
import { PersonnelDirectory } from './shared/personnelDirectory.service';
import { PersonnelDetailsReadComponent } from './personnel-details-read/personnel-details-read.component';
import { PersonnelDetailsEditComponent } from './personnel-details-edit/personnel-details-edit.component';

var app = angular.module('personnelDirectory', ['ngRoute']);

app
	.service('helpService', HelpService)
	.service('personnelDirectory', PersonnelDirectory)
	.component('help', new HelpComponent())
	.component('navbar', new NavBarComponent())
	.component('personnelList', new PersonnelListComponent())
	.component('personnelDetails', new PersonnelDetailsComponent())
	.component('personnelDetailsEdit', new PersonnelDetailsEditComponent())
	.component('personnelDetailsRead', new PersonnelDetailsReadComponent())
	;


app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.
		when('/personnel', {
			template: '<personnel-list></personnel-list>'
		}).
		when('/personnel/:id', {
			template: '<personnel-details></personnel-details>'
		}).
		when('/help', {
			template: '<help></help>'
		}).
		otherwise({
			redirectTo: '/personnel'
		});
	$locationProvider.hashPrefix('');
	$locationProvider.html5Mode(false);
}]);

// angular.element(() => angular.bootstrap(document.body, ['personnelDirectory']));
