import { Component } from '@angular/core';
import { WebServiceEstadoService } from 'src/app/Services/ServiceEstado/web-service-estado.service';

@Component({
  selector: 'app-component-estado',
  templateUrl: './component-estado.component.html',
  styleUrls: ['./component-estado.component.css']
})
export class ComponentEstadoComponent {

  public listEstado: any = [];

 p: number = 1;

  public constructor(public serviceEstado: WebServiceEstadoService){}

  public ngOnInit()
  {
    this.getEstado();
  }

  public getEstado()
  {
    this.serviceEstado.get('https://localhost:44317/api/Estado').subscribe(respuesta =>{
      this.listEstado = respuesta;
    });
  }

}
