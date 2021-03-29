import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ThreeDataService {
  constructor(private http: HttpClient) {  }

  public get() {
    return this.http.get('api/').toPromise();
  }

  public save(data) {
    this.http.post('api/save', { data: JSON.stringify(data) }).subscribe((error) => console.log(error));
  }
}
