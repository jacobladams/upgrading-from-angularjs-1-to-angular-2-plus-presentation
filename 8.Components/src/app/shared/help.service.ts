import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HelpService {
  helpUrl: string = 'http://localhost:4000/help';

  constructor(@Inject('$http') private $http: ng.IHttpService) {}

  getHelp(): ng.IPromise<Help> {
    return this.$http.get<Help>(this.helpUrl).then(response => response.data);
  }

  // constructor(private http:HttpClient) {
  // }

  // getHelp(): Promise<Help> {
  //    return this.http.get<Help>(this.helpUrl).toPromise();
  // }
}
