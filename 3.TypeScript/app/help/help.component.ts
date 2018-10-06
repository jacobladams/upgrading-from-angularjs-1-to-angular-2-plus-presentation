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

angular.module('personnelDirectory').component('help', {
    templateUrl: '/app/help/help.component.html',
    controller: HelpController
});

// class HelpComponent implements ng.IComponentOptions {

//     public bindings: any;
//     public controller: any;
//     public controllerAs: string;
//     public template: string;

//     constructor() {
//         this.bindings = {
//             name: '@'
//         };
//         this.controller = MyController;
//         this.controllerAs = 'vm';
//         this.template = '<button>{{vm.name}}</button>';
//     }
// }
