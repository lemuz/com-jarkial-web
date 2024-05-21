import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  private DOMINIO = environment.baseUrl + '/com-jarkial-api';

  constructor(private http: HttpClient) { }

  postMethod(context: string, object: any){
    return this.http.post(this.DOMINIO + context, object);
  }

  getMethod(context: string): Observable<any>{
    return this.http.get(this.DOMINIO + context);
  }
}
