import { Component } from '@angular/core';
import { WebServiceEmpleadoService } from 'src/app/Services/ServiceEmpleado/web-service-empleado.service';

@Component({
  selector: 'app-component-empresa',
  templateUrl: './component-empresa.component.html',
  styleUrls: ['./component-empresa.component.css']
})
export class ComponentEmpresaComponent {

  public listEmpresa : any = [];

  p: number = 1;

  constructor(public serviceEmpresa: WebServiceEmpleadoService){}

  public ngOnInit()
  {
    this.getEmpresa();
  }

  public getEmpresa()
  {
      this.serviceEmpresa.get('https://localhost:44317/api/Empresa').subscribe(
        respuesta =>{
          this.listEmpresa = respuesta
        }
      );
  }

}
