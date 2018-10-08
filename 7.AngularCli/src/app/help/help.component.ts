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
  template = require('./help.component.html');
  controller = HelpController;
}
