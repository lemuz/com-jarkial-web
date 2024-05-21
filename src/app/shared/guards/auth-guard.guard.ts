import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UtilMethods } from '../utils/utilMethods';
import { AuthService } from '../services/auth.service';
import { BaseHttpService } from '../services/base-http.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService extends UtilMethods {

  constructor(
    private router: Router,
    private authService: AuthService,
    private httpBaseService: BaseHttpService,
    private cookieService: CookieService
  ){
    super();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let tkn = this.cookieService.get('tkn');

    if (tkn !== undefined && tkn !== null && tkn !== ''){
      this.authService.setSucursal(tkn);

      const url = `usuario/rol/user/list`;
      return this.httpBaseService.getMethod(url).pipe(
        map(resp => {
          if (resp.codigo === this.CODE_HTTP_SUCCESS){
            this.authService.setRoles(resp.content.roles);
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }),
        catchError(() => {
          this.router.navigate(['/login']);
          return of(false);
        })
      );

    } else {
      this.router.navigate(['/login']);
      return of(false);
    }
  }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(PermissionsService).canActivate(next, state);
};
