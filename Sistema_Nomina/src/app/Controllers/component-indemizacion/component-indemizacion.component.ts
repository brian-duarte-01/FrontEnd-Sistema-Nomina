import { Component } from '@angular/core';
import { WebserviceIndemizacionService } from 'src/app/Services/ServiceIndemizacion/webservice-indemizacion.service';

@Component({
  selector: 'app-component-indemizacion',
  templateUrl: './component-indemizacion.component.html',
  styleUrls: ['./component-indemizacion.component.css']
})
export class ComponentIndemizacionComponent {

  public listIndemizacion: any = [];

  public buscarEmpleado: string ="";

  p: number = 1;

 constructor(private serviceIndemizacion: WebserviceIndemizacionService){}

  public ngOnInit()
  {
    this.getIndemizacion();
  }

  public getIndemizacion(){
    this.serviceIndemizacion.get('https://localhost:44317/api/Indemizacion/Buscar?empleado='+this.buscarEmpleado+'').subscribe(respuesta=>{
      this.listIndemizacion = respuesta;
    });
  }
}
