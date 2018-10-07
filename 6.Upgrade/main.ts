import 'core-js/es7/reflect';
import 'core-js/client/shim';
import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule, downgradeInjectable } from '@angular/upgrade/static';
import { AppModule } from './app/app.module';
import { HelpService } from './app/shared/help.service';

declare var angular: angular.IAngularStatic;

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef =>{
    
    angular.module('personnelDirectory').service('helpService', downgradeInjectable(HelpService))

    platformRef.injector.get(UpgradeModule).bootstrap(document.body, ['personnelDirectory']);
    console.log('bootstrapped');
});