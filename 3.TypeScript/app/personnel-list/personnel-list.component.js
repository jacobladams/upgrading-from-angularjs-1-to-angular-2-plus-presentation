angular.module('personnelDirectory').component('personnelList', {
    templateUrl: '/app/personnel-list/personnel-list.component.html',
    controller: ['personnelDirectory',  function ( personnelDirectory) {
        var $ctrl = this;
        $ctrl.personnelDirectory = personnelDirectory;
    }]
});




