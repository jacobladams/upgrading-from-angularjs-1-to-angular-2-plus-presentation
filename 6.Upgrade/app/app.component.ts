import { Component } from "@angular/core";

@Component({
  selector: 'app',
  template: `
    <navbar></navbar>
    <div class="ng-view"></div>
  `
})
export class AppComponent {}