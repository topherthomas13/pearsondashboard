import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ApiService {
  private rootURL = '/api';

  constructor(private http: HttpClient) {}

  public login(userObject: {}): Observable<boolean> {
    const result = this.http.post(`${this.rootURL}/login`, userObject);

    return of(true);
  }

  public home(): Observable<any> {
    const result = this.http.get(`${this.rootURL}/`);

    return of({});
  }
}
