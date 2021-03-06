import { PersonnelListComponent } from './personnel-list/personnel-list.component';
import { HelpComponent } from './help/help.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { HelpService } from './shared/help.service';
import { PersonnelDetailsEditComponent } from './personnel-details-edit/personnel-details-edit.component';
import { PersonnelDetailsComponent } from './personnel-details/personnel-details.component';
import { PersonnelDetailsReadComponent } from './personnel-details-read/personnel-details-read.component';
import { PersonnelDirectory } from './shared/personnelDirectory.service';

@NgModule({
  declarations: [
    AppComponent,
    HelpComponent,
    NavBarComponent,
    PersonnelDetailsComponent,
    PersonnelDetailsEditComponent,
    PersonnelDetailsReadComponent,
    PersonnelListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'help', component: HelpComponent},
      { path: 'personnel', component: PersonnelListComponent },
      { path: 'personnel/:id', component: PersonnelDetailsComponent },
      { path: '**', redirectTo: 'personnel', pathMatch: 'full'}
    ], {useHash: true})
  ],
  providers: [
    HelpService,
    PersonnelDirectory
  ],
  bootstrap: [AppComponent],
  entryComponents: [
  ]
})
export class AppModule {}
