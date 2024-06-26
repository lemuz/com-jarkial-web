import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoadingService } from './shared/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  public showLoading = false;

  public loadingSub: Subscription = new Subscription();

  constructor(
    private loadingService: LoadingService
  ){
    sessionStorage.setItem('apiUrl', '');
    this.loadingSub = this.loadingService.loading.subscribe(load => {
      setTimeout(() => this.showLoading = load, 0);
    });

  }
  ngOnInit(): void { }
}
