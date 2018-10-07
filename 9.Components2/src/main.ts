// import { PersonnelDetailsReadDirective } from './app/personnel-details-read/personnel-details-read.component';
// import { PersonnelDetailsEditDirective } from './app/personnel-details-edit/personnel-details-edit.component';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { UpgradeModule, downgradeInjectable, setAngularLib, downgradeComponent } from '@angular/upgrade/static';

import { HelpService } from './app/shared/help.service';

import './app/app';

import * as angular from 'angular';

import 'angular-route';
import { PersonnelDetailsComponent } from './app/personnel-details/personnel-details.component';

// declare var angular: angular.IAngularStatic;

setAngularLib(angular);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  angular.module('personnelDirectory').service('helpService', downgradeInjectable(HelpService));
  angular.module('personnelDirectory').directive('personnelDetails', downgradeComponent({component: PersonnelDetailsComponent}));
  // angular.module('personnelDirectory').directive('personnelDetailsRead', downgradeComponent({component: PersonnelDetailsReadDirective}));
  // angular.module('personnelDirectory').directive('personnelDetailsEdit', downgradeComponent({component: PersonnelDetailsEditDirective}));

  platformRef.injector.get(UpgradeModule).bootstrap(document.body, ['personnelDirectory']);
  console.log('bootstrapped');
})
  .catch(err => console.error(err));

