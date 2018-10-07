import { HelpService } from '../shared/help.service';

class HelpController {
  helpText: string;

  static $inject = ['helpService'];

  constructor(helpService: HelpService) {
    helpService.getHelp().then(help => {
      this.helpText = help.helpText;
    });
  }
}

export class HelpComponent implements ng.IComponentOptions {
  templateUrl = './help.component.html';
  controller = HelpController;
}

// import { HelpService } from '../shared/help.service';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-help',
//   templateUrl: './help.component.html'
// })
// export class HelpComponent {
//   helpText: string;
//   constructor(helpService: HelpService) {
//     helpService.getHelp().then(help => {
//       this.helpText = help.helpText;
//     });
//   }
// }

