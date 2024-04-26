import { Component } from '@angular/core';
import { WebServiceEmpleadoService } from 'src/app/Services/ServiceEmpleado/web-service-empleado.service';

@Component({
  selector: 'app-component-empleado',
  templateUrl: './component-empleado.component.html',
  styleUrls: ['./component-empleado.component.css']
})
export class ComponentEmpleadoComponent {

  public listEmpleado: any = [];

  p: number = 1;


  constructor(private webEmpleado: WebServiceEmpleadoService){}

  public ngOnInit()
  {
    this.getEmpleado();
  }

  public getEmpleado()
  {
      this.webEmpleado.get('https://localhost:44317/api/Empleado').subscribe(respuesta=>{
        this.listEmpleado = respuesta;
      });
  }
}
