import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WebServiceTipoPagoService } from 'src/app/Services/ServiceTipoPago/web-service-tipo-pago.service';

@Component({
  selector: 'app-component-tipo-pago',
  templateUrl: './component-tipo-pago.component.html',
  styleUrls: ['./component-tipo-pago.component.css']
})
export class ComponentTipoPagoComponent {

  public listTipoPago: any = [];
  public obTipoPago: any =[];

  p: number = 1;

  constructor(
    private serviceTipoPago: WebServiceTipoPagoService,
    private fb: FormBuilder
  ){}

  public ngOnInit()
  {
    this.getTipoPago();
    this.obtenerTipoPago(0);
  }

  public getTipoPago()
  {
      this.serviceTipoPago.get('https://localhost:44317/api/TipoPago').subscribe(
        respuesta =>{
          this.listTipoPago = respuesta;
        }
      );
  }


  form: FormGroup = this.fb.group({
    tipo_pago: ['']
  });

  public postTipoPago()
  {
    this.serviceTipoPago.post('https://localhost:44317/api/TipoPago',{
      tipo_pago: this.form.value.tipo_pago
    }).subscribe(respuesta=>{

    });
    this.form.reset();
    confirm('Se envio correctamente!!');
  }

  public deleteEmpresa(id:number)
  {
   this.serviceTipoPago.delete('https://localhost:44317/api/TipoPago/',id).subscribe(()=>{

   });
  }

  public obtenerTipoPago(id:number){
    this.serviceTipoPago.get('https://localhost:44317/api/TipoPago/'+id).subscribe(respuesta=>{
      this.obTipoPago = respuesta;
    });
  }

  editForm: FormGroup = this.fb.group({
    tipo_pago: ['']
  });

  public putTipoPago(id:number){
    this.serviceTipoPago.put('https://localhost:44317/api/TipoPago/',id,{
      tipo_pago: this.editForm.value.tipo_pago
    }).subscribe(()=>{});
    confirm('Se edito correctamente!!');
  }

}
