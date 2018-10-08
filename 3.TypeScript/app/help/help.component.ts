// angular.module('personnelDirectory').component('help', {
//     templateUrl: '/app/help/help.component.html',
//     controller: ['helpService',  function ( helpService) {
//         var $ctrl = this;
//         helpService.getHelp().then(function(help) {
//             $ctrl.helpText = help.helpText;
//         });
//     }]
// });

class HelpController {
    helpText: string;
 
    static $inject = ['helpService'];

    constructor(helpService: HelpService) {
        helpService.getHelp().then(help=> {
            this.helpText = help.helpText;
        });
    }
}

class HelpComponent implements ng.IComponentOptions {
    templateUrl = '/app/help/help.component.html';
    controller = HelpController
}

angular.module('personnelDirectory').component('help', new HelpComponent());
