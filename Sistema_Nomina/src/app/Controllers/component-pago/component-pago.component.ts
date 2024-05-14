import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WebservicePagoService } from 'src/app/Services/ServicePago/webservice-pago.service';
import {NgModule} from '@angular/core'
import { WebServiceTipoPagoService } from 'src/app/Services/ServiceTipoPago/web-service-tipo-pago.service';
import { WebServiceEstadoService } from 'src/app/Services/ServiceEstado/web-service-estado.service';

@Component({
  selector: 'app-component-pago',
  templateUrl: './component-pago.component.html',
  styleUrls: ['./component-pago.component.css']
})
export class ComponentPagoComponent {

  public listPago: any = [];
  public buscarPago: string ="";
  public listTipoPago: any = [];
  public listEstado: any = [];


  p: number = 1;

  constructor(
    private servicePago: WebservicePagoService,
    private fb: FormBuilder,
    private apiTipoPago: WebServiceTipoPagoService,
    private apiEstado: WebServiceEstadoService
  ){}

  public ngOnInit()
  {
    this.getPago();
    this.getTipoPago(); 
    this.getEstado(); 
  }


  public getPago()
  {
    this.servicePago.get('https://localhost:44317/api/Pago/Buscar?empleado='+this.buscarPago+'').subscribe(respuesta=>{
      this.listPago = respuesta;
    });
  }


  public getTipoPago()
  {
    this.apiTipoPago.get('https://localhost:44317/api/TipoPago').subscribe(respuesta=>{
      this.listTipoPago = respuesta;
    });
  }

  public getEstado()
  {
    this.apiEstado.get('https://localhost:44317/api/Estado').subscribe(respuesta=>{
      this.listEstado = respuesta;  
    });
  }


  form: FormGroup = this.fb.group({
    empleado: [''],
    salario:[''],
    bonificacion:[''],
    tipo_pago:[''],
    estado:['']
  }); 

  public postPago()
  {
    this.servicePago.post('https://localhost:44317/api/Pago',{
      empleado:this.form.value.empleado,
      salario: this.form.value.salario,
      bonificacion: this.form.value.bonificacion,
      tipo_pago: this.form.value.tipo_pago,
      estado: this.form.value.estado
    }).subscribe(respuesta=>{

    });
    this.form.reset();
    confirm('Se envio correctamente!!');
  }

}
