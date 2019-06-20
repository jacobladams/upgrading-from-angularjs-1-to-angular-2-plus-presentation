import { HelpService } from './shared/help.service';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';

function getHttp(injector) {
  console.log('running injector');
  return injector.get('$http');
}

@NgModule({
	imports: [BrowserModule, FormsModule, HttpClientModule, UpgradeModule],
	declarations: [AppComponent, NavBarComponent],
	providers: [
		HelpService,
		{
			provide: '$http',
			useFactory: getHttp,
			deps: ['$injector']
		}
	],
	bootstrap: [AppComponent],
	entryComponents: [NavBarComponent]
})
export class AppModule {}
