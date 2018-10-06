
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { UpgradeModule } from '@angular/upgrade/static';
 
// @NgModule({
//   imports: [
//     BrowserModule,
//     UpgradeModule
//   ]
// })
// class AppModule {
//   constructor(private upgrade: UpgradeModule) { }
//   ngDoBootstrap() {
//     this.upgrade.bootstrap(document.body, ['personnelDirectory'], { strictDi: true });
//   }
// }

// platformBrowserDynamic().bootstrapModule(AppModule);

// // platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
// //     const upgrade = platformRef.injector.get(UpgradeModule);
// //     upgrade.bootstrap(document.documentElement,  ['personnelDirectory'])
// // });

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