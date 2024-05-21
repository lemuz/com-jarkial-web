import { Injectable } from '@angular/core';
import { UtilMethods } from '../utils/utilMethods';
import { Observable, Subject } from 'rxjs';
import { Catalogo } from '../interfaces/catalogo';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends UtilMethods{

  public listEvents: Observable<Catalogo[]> = new Observable<Catalogo[]>();

  public permisos: any;
  public roles: any;
  public tkn: string | null = '';
  public user: string | null = '';
  public userId: string | null = '';
  public sucursal: string | null = '';
  public time: string | null = '';

  public intiService = false;
  public showAdmin = false;
  public showHome = false;
  public showAdminSubject: Subject<boolean> = new Subject();
  public showHomeSubject: Subject<boolean> = new Subject();

  constructor() {
    super();
  }

  setSucursal(data: any): void{
    this.sucursal = data;
  }

  setRoles(data: any): void{
    this.roles = data;
    this.intiService = true;
  }
}
