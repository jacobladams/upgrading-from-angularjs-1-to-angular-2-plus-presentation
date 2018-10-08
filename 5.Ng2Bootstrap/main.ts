import 'core-js/es7/reflect';
import 'core-js/client/shim';
import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef =>{
    platformRef.injector.get(UpgradeModule).bootstrap(document.body, ['personnelDirectory']);
    console.log('bootstrapped');
});