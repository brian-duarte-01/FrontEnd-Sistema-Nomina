import { Component } from '@angular/core';
import { WebServiceEstadoService } from 'src/app/Services/ServiceEstado/web-service-estado.service';

@Component({
  selector: 'app-component-estado',
  templateUrl: './component-estado.component.html',
  styleUrls: ['./component-estado.component.css']
})
export class ComponentEstadoComponent {

  constructor(private RestService: WebServiceEstadoService)
  {

  }

  ngOnInit(): void 
  {

  }

  }
  

