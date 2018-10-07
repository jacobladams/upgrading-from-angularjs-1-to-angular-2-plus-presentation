import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PersonnelDirectory {
  private personnelApiUrl = 'http://localhost:4000/personnel';
  private titleApiUrl = 'http://localhost:4000/titles';

  personnelList: Personnel[];
  personnel: Personnel;
  getPersonnelPromise: Promise<Personnel[]>;

  titles: string[];

  constructor(private http: HttpClient) {
    this.getPersonnelPromise = http
      .get<Personnel[]>(this.personnelApiUrl)
      .toPromise()
      .then(result => {
        this.personnelList = result;
        return this.personnelList;
      });
    http.get<string[]>(this.titleApiUrl)
    .toPromise()
    .then(result => {
      this.titles = result;
    });
  }

  setPersonnel(id) {
    this.getPersonnelPromise.then(() => {
      this.personnel = this.personnelList.filter(
        personnel => personnel.id == id
      )[0];
    });
  }

  savePersonnel(personnel) {
    console.log('editting personnel');
    console.log(personnel);
    this.http
      .post(`${this.personnelApiUrl}/${personnel.id}`, personnel)
      .toPromise()
      .then(function() {
        personnel.isEditting = false;
      });
  }

  editPersonnel(personnel) {
    personnel.isEditting = true;
  }
}
