import { Component, Input, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent implements OnInit {

  @Input() message = 'Cargando';

  constructor(public loadingService: LoadingService){
  }

  ngOnInit(): void {
  }

}
