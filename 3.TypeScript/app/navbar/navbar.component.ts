
class NavBarComponent implements ng.IComponentOptions {
    templateUrl = '/app/navbar/navbar.component.html';
}

angular.module('personnelDirectory').component('navbar', new NavBarComponent());