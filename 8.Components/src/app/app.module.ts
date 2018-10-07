import { PersonnelDetailsReadComponent } from './personnel-details-read/personnel-details-read.component';
import { HelpComponent } from './help/help.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { HelpService } from './shared/help.service';

function getHttp(injector) {
  console.log('running injector');
  return injector.get('$http');
}

@NgModule({
  declarations: [AppComponent, NavBarComponent, PersonnelDetailsReadComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    UpgradeModule],
  providers: [
    HelpService,
    {
      provide: '$http',
      useFactory: getHttp,
      deps: ['$injector']
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [NavBarComponent, PersonnelDetailsReadComponent]
})
export class AppModule {}
