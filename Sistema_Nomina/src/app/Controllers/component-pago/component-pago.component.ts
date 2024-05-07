import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WebservicePagoService } from 'src/app/Services/ServicePago/webservice-pago.service';
import {NgModule} from '@angular/core'

@Component({
  selector: 'app-component-pago',
  templateUrl: './component-pago.component.html',
  styleUrls: ['./component-pago.component.css']
})
export class ComponentPagoComponent {

  public listPago: any = [];

   public buscarPago: string ="";


  p: number = 1;

  constructor(private servicePago: WebservicePagoService){}

  public ngOnInit()
  {
    this.getPago();
  }


  public getPago()
  {
    this.servicePago.get('https://localhost:44317/api/Pago/Buscar?empleado='+this.buscarPago+'').subscribe(respuesta=>{
      this.listPago = respuesta;
    });
  }

}
