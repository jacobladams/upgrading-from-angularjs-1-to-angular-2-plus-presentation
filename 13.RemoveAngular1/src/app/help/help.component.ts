import { HelpService } from '../shared/help.service';
import { Component } from '@angular/core';


@Component({
  selector: 'help',
  templateUrl: './help.component.html'
})
export class HelpComponent {
  helpText: string;

  constructor(helpService: HelpService) {
    helpService.getHelp().then(help => {
      this.helpText = help.helpText;
    });
  }
}



