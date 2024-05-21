import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BaseHttpService } from 'src/app/shared/services/base-http.service';
import { Login } from '../class/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private subjectLogged = new Subject();

  constructor(private http: BaseHttpService) { }

  signin(url: string, data: Login): Observable<any> {
    return this.http.postMethod(url, data);
  }

  setLogged(isLogged: boolean): void {
    this.subjectLogged.next(isLogged);
  }

  getIsLogged(): Observable<any> {
    return this.subjectLogged.asObservable();
  }
}
