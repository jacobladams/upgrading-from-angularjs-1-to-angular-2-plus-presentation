angular.module('personnelDirectory').component('help', {
    templateUrl: '/app/help/help.component.html',
    controller: ['helpService',  function ( helpService) {
        var $ctrl = this;
        helpService.getHelp().then(function(help) {
            $ctrl.helpText = help.helpText;
        });
    }]
});
