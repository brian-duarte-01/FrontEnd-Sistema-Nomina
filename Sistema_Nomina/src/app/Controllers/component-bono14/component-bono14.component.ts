import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WebServiceBono14Service } from 'src/app/Services/ServiceBono14/web-service-bono14.service';
import { WebServiceEstadoService } from 'src/app/Services/ServiceEstado/web-service-estado.service';
import { WebServiceTipoPagoService } from 'src/app/Services/ServiceTipoPago/web-service-tipo-pago.service';

@Component({
  selector: 'app-component-bono14',
  templateUrl: './component-bono14.component.html',
  styleUrls: ['./component-bono14.component.css']
})
export class ComponentBono14Component {

  public listBono14: any =[];
  public buscarBono14: string ="";
  public listTipoPago: any = [];
  public listEstado: any = [];
  public obBono14: any = [];


  p: number = 1;

  constructor(
    private apiService: WebServiceBono14Service,
    private fb: FormBuilder,
    private apiTipoPago: WebServiceTipoPagoService,
    private apiEstado: WebServiceEstadoService
  ){}

  public ngOnInit()
  {
    this.getBono14();
    this.getTipoPago();
    this.getEstado(); 
    this.obtenerBono14(0);
  }

  public getBono14()
  {
    this.apiService.get('https://localhost:44317/api/Bono14/Buscar?empleado='+this.buscarBono14+'').subscribe(respuesta=>{
      this.listBono14 = respuesta;
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
    empleado:[''],
    meses:[''],
    salario:[''],
    tipo_pago:[''],
    estado:['']
  });

  public postBono14()
  {
    this.apiService.post('https://localhost:44317/api/Bono14',{
      empleado: this.form.value.empleado,
      meses: this.form.value.meses,
      salario: this.form.value.salario,
      tipo_pago: this.form.value.tipo_pago,
      estado: this.form.value.estado
    }).subscribe(respuesta=>{
    })
    this.form.reset();
    confirm('Se envio correctamente!!');
  }


 public deleteEmpresa(id:number)
  {
   this.apiService.delete('https://localhost:44317/api/Bono14/',id).subscribe(()=>{

   });
  }

  public obtenerBono14(id:number){
    this.apiService.get('https://localhost:44317/api/Bono14/'+id).subscribe(respuesta=>{
      this.obBono14 = respuesta;
    });
  }

  editForm: FormGroup = this.fb.group({
    empleado:[''],
    meses:[''],
    salario:[''],
    tipo_pago:[''],
    estado:['']
  });

  public putBono14(id:number){
    this.apiService.put('https://localhost:44317/api/Bono14/',id,{
      empleado: this.editForm.value.empleado,
      meses: this.editForm.value.meses,
      salario: this.editForm.value.salario,
      tipo_pago: this.editForm.value.tipo_pago,
      estado: this.editForm.value.estado
    }).subscribe(respuesta=>{});
    confirm('Se edito correctamente!!');
  }

  pagarForm: FormGroup = this.fb.group({
    estado: []
  });
  
  public pagarPago(){
    this.apiService.pagar('https://localhost:44317/api/Bono14',{
      estado:this.pagarForm.value.estado
    }).subscribe(respuesta=>{});
    confirm('Se realizo el pago a todos correctamente!!');
  }



}
