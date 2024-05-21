import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/security/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  nombreUsuario: string | null = '';
  sucursalUsuario: string | null = '';
  rolUsuario: string | null = '';
  menu = false;

  mostrar(): void {
    this.menu = true;
  }

  constructor(
    private router: Router,
    private loginService: LoginService
  ){

  }

  ngOnInit(): void {
    this.nombreUsuario = sessionStorage.getItem('user');
    this.sucursalUsuario = sessionStorage.getItem('sucursal');
  }

  signout(): void {
    Swal.fire({
      title: 'Cerrar Sesion',
      text: 'Esta Seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if(result.isConfirmed){
        this.loginService.setLogged(false);
        sessionStorage.clear();
        this.router.navigateByUrl('security/login');
      }
    })
  }

  home(): void {
    this.router.navigateByUrl('/home');
  }

}
