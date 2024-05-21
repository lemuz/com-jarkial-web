import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NavbarButtomComponent } from './components/navbar-buttom/navbar-buttom.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LoadingComponent,
    NavbarButtomComponent,
    NoDataComponent,
    SidebarMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LoadingComponent]
})
export class SharedModule { }
