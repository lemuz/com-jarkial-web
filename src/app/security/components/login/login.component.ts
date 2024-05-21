import { Component, OnInit } from '@angular/core';
import { UtilMethods } from 'src/app/shared/utils/utilMethods';
import { Login } from '../../class/login';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { CookieService } from 'ngx-cookie-service';
import { ResponseLogin } from 'src/app/shared/interfaces/response-login';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent extends UtilMethods implements OnInit {

  public login: Login = new Login('', '');

  constructor(
    private loginService: LoginService,
    private router: Router,
    private authService: AuthService,
    private loadingService: LoadingService,
    private cookieService: CookieService
  ) {
    super();
  }

  ngOnInit(): void {
    sessionStorage.clear();
  }

  signin(): void {
    this.loadingService.showLoading('Iniciando Sesion');
    this.loginService.signin('/login-service/security/login', this.login).subscribe(response => {
      this.loadingService.hideLoading();
      const resp: ResponseLogin = response;
      if (resp.code && resp.code === '00') {
        sessionStorage.setItem('user', resp.response.userName);
        sessionStorage.setItem('evnt', '1011');
        sessionStorage.setItem('userId', resp.response.userId);
        sessionStorage.setItem('tkn', resp.response.token);
        sessionStorage.setItem('uuid', resp.response.uuid);
        sessionStorage.setItem('sucursal', resp.response.sucursal);
        sessionStorage.setItem('time', new Date().getTime().toString());

        this.cookieService.set('user', resp.response.userName);
        this.cookieService.set('evnt', '1011');
        this.cookieService.set('userId', resp.response.userId);
        this.cookieService.set('tkn', resp.response.token);
        this.cookieService.set('uuid', resp.response.uuid);
        this.cookieService.set('sucursal', resp.response.sucursal);
        this.cookieService.set('time', new Date().getTime().toString());

        this.router.navigate(['/app/home']);

      } else {
        Swal.fire('Advertencia', resp.message, 'warning');
      }
    }, error => {
      this.loadingService.hideLoading();
      Swal.fire('Error', 'No fue posible procesar la peticion, contacte con <b>El administrador del sistema</b> si el problema persiste', 'error');
    });
  }

}
