import { Component } from '@angular/core';
import { WebservicePagoService } from 'src/app/Services/ServicePago/webservice-pago.service';

@Component({
  selector: 'app-component-pago',
  templateUrl: './component-pago.component.html',
  styleUrls: ['./component-pago.component.css']
})
export class ComponentPagoComponent {

  public listPago: any = [];

  p: number = 1;

  constructor(private servicePago: WebservicePagoService){}

  public ngOnInit()
  {
    this.getPago();
  }

  public getPago()
  {
    this.servicePago.get('https://localhost:44317/api/Pago').subscribe(respuesta=>{
      this.listPago = respuesta;
    });
  }

}
