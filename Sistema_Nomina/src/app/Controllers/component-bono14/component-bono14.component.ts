import { Component } from '@angular/core';
import { WebServiceBono14Service } from 'src/app/Services/ServiceBono14/web-service-bono14.service';

@Component({
  selector: 'app-component-bono14',
  templateUrl: './component-bono14.component.html',
  styleUrls: ['./component-bono14.component.css']
})
export class ComponentBono14Component {

  public listBono14: any =[];
  public buscarBono14: string ="";
  p: number = 1;

  constructor(private apiService: WebServiceBono14Service){}

  public ngOnInit()
  {
    this.getBono14();
  }

  public getBono14()
  {
    this.apiService.get('https://localhost:44317/api/Bono14/Buscar?empleado='+this.buscarBono14+'').subscribe(respuesta=>{
      this.listBono14 = respuesta;
    });
  }



}
