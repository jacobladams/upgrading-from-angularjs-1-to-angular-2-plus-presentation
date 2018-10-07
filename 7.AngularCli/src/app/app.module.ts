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
  declarations: [AppComponent, NavBarComponent],
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
  bootstrap: [AppComponent, NavBarComponent]
})
export class AppModule {}
