import { Component } from '@angular/core';
import { WebServiceEmpleadoService } from 'src/app/Services/ServiceEmpleado/web-service-empleado.service';
import { WebServiceEstadoService } from 'src/app/Services/ServiceEstado/web-service-estado.service';
import { WebServiceTipoPagoService } from 'src/app/Services/ServiceTipoPago/web-service-tipo-pago.service';

@Component({
  selector: 'app-component-index',
  templateUrl: './component-index.component.html',
  styleUrls: ['./component-index.component.css']
})
export class ComponentIndexComponent {

  public Estado: any;
  public Empleado: any;
  public TipoPago: any;

  constructor(
    private RestServiceEstado: WebServiceEstadoService,
    private RestServiceEmpleado: WebServiceEmpleadoService,
    private RestServiceTipoPago: WebServiceTipoPagoService
    )
  {

  }

  ngOnInit(): void 
  {
    this.getEstado();
    this.getEmpleado();
    this.getTipoPago();
  }

  public getEstado()
  {
    this.RestServiceEstado.get('https://localhost:44317/api/Estado/Count')
    .subscribe(respuesta =>{
      this.Estado = respuesta;
    });
  }

  public getEmpleado()
  {
    this.RestServiceEmpleado.get('https://localhost:44317/api/Empleado/Count')
    .subscribe(respuesta=>{
        this.Empleado = respuesta;
    });
  }

  public getTipoPago()
  {
    this.RestServiceTipoPago.get('https://localhost:44317/api/TipoPago/Count')
    .subscribe(respuesta=>{
      this.TipoPago = respuesta;
    });
  }

}
