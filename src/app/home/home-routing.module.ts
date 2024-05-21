import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {
        path: 'home', component: HomeComponent
      },
      //{
      //  path: 'admin', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
      //},
      {
        path: '**', redirectTo: '/app/home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
