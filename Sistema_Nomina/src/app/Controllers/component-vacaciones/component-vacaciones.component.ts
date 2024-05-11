import { Component } from '@angular/core';
import { WebServiceVacacionesService } from 'src/app/Services/ServiceVacaciones/web-service-vacaciones.service';

@Component({
  selector: 'app-component-vacaciones',
  templateUrl: './component-vacaciones.component.html',
  styleUrls: ['./component-vacaciones.component.css']
})
export class ComponentVacacionesComponent {
  public listVacaciones: any =[];
  public buscarVacaciones: string ="";
  p: number = 1;

  constructor(private apiService: WebServiceVacacionesService){}

  public ngOnInit()
  {
    this.getVacaciones();
  }

  public getVacaciones()
  {
    this.apiService.get('https://localhost:44317/api/Vacaciones/Buscar?empleado='+this.buscarVacaciones+'').subscribe(respuesta=>{
      this.listVacaciones = respuesta;
    });
  }

}
