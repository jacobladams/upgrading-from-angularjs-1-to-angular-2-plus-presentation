import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { HelpService } from './shared/help.service';
import { PersonnelDetailsEditDirective } from './personnel-details-edit/personnel-details-edit.component';
import { PersonnelDetailsReadDirective } from './personnel-details-read/personnel-details-read.component';
import { PersonnelDetailsComponent } from './personnel-details/personnel-details.component';

// function getHttp(injector) {
//   console.log('running injector');
//   return injector.get('$http');
// }

function getService(name: string) {
  console.log('running injector');
  return (injector) => injector.get(name);
}

@NgModule({
  declarations: [AppComponent, NavBarComponent, PersonnelDetailsComponent, PersonnelDetailsEditDirective, PersonnelDetailsReadDirective],
  imports: [
    BrowserModule,
    HttpClientModule,
    UpgradeModule],
  providers: [
    HelpService,
    {
      provide: '$http',
      useFactory: getService('$http'),
      deps: ['$injector']
    },
    {
      provide: 'personnelDirectory',
      useFactory: getService('personnelDirectory'),
      deps: ['$injector']
    },
    {
      provide: '$routeParams',
      useFactory: getService('$routeParams'),
      deps: ['$injector']
    }
  ],
  bootstrap: [AppComponent, NavBarComponent, PersonnelDetailsComponent]
})
export class AppModule {}
