import { Component } from '@angular/core';
import { WebServiceTipoPagoService } from 'src/app/Services/ServiceTipoPago/web-service-tipo-pago.service';

@Component({
  selector: 'app-component-tipo-pago',
  templateUrl: './component-tipo-pago.component.html',
  styleUrls: ['./component-tipo-pago.component.css']
})
export class ComponentTipoPagoComponent {

  public listTipoPago: any = [];

  p: number = 1;

  constructor(private serviceTipoPago: WebServiceTipoPagoService){}

  public ngOnInit()
  {
    this.getTipoPago();
  }

  public getTipoPago()
  {
      this.serviceTipoPago.get('https://localhost:44317/api/TipoPago').subscribe(
        respuesta =>{
          this.listTipoPago = respuesta;
        }
      );
  }

}
