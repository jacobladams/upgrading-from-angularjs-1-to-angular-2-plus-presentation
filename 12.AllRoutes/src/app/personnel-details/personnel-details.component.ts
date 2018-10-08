import { PersonnelDirectory } from '../shared/personnelDirectory.service';
import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'personnel-details',
  templateUrl: './personnel-details.component.html'
})
export class PersonnelDetailsComponent implements OnInit, OnDestroy {
  private routeParamSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    public personnelDirectory: PersonnelDirectory
  ) {}

  ngOnInit() {
    this.routeParamSubscription = this.route.params.subscribe(params => {
      const personnelId = params['id'];
      this.personnelDirectory.setPersonnel(personnelId);
    });
  }

  ngOnDestroy() {
    this.routeParamSubscription.unsubscribe();
  }
}
