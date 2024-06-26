import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WebServiceEstadoService } from 'src/app/Services/ServiceEstado/web-service-estado.service';
import { WebserviceIndemizacionService } from 'src/app/Services/ServiceIndemizacion/webservice-indemizacion.service';
import { WebServiceTipoPagoService } from 'src/app/Services/ServiceTipoPago/web-service-tipo-pago.service';

@Component({
  selector: 'app-component-indemizacion',
  templateUrl: './component-indemizacion.component.html',
  styleUrls: ['./component-indemizacion.component.css']
})
export class ComponentIndemizacionComponent {

  public listIndemizacion: any = [];
  public buscarEmpleado: string ="";
  public listTipoPago: any = [];
  public listEstado: any = [];
  public obIndemizacion: any =[];

  p: number = 1;

 constructor(
  private serviceIndemizacion: WebserviceIndemizacionService,
  private fb: FormBuilder,
  private apiTipoPago: WebServiceTipoPagoService,
  private apiEstado: WebServiceEstadoService
){}

  public ngOnInit()
  {
    this.getIndemizacion();
    this.getEstado();
    this.getTipoPago(); 
    this.obtenerIndemizacion(0);
  }

  public getIndemizacion(){
    this.serviceIndemizacion.get('https://localhost:44317/api/Indemizacion/Buscar?empleado='+this.buscarEmpleado+'').subscribe(respuesta=>{
      this.listIndemizacion = respuesta;
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
  anos:[''],
  meses:[''],
  salario:[''],
  tipo_pago:[''],
  estado:['']
  });

  public post()
  {
    this.serviceIndemizacion.post('https://localhost:44317/api/Indemizacion',{
      empleado: this.form.value.empleado,
      anos: this.form.value.anos,
      meses:this.form.value.meses,
      salario:this.form.value.salario,
      tipo_pago:this.form.value.tipo_pago,
      estado:this.form.value.estado
    }).subscribe(respuesta=>{

    });
    this.form.reset();
    confirm('Se envio correctamente!!');
  }


  
 public deleteEmpresa(id:number)
 {
  this.serviceIndemizacion.delete('https://localhost:44317/api/Indemizacion/',id).subscribe(()=>{

  });
 }

 public obtenerIndemizacion(id:number){
  this.serviceIndemizacion.get('https://localhost:44317/api/Indemizacion/'+id).subscribe(respuesta=>{
    this.obIndemizacion = respuesta;
  });
 }

  editForm: FormGroup = this.fb.group({
  empleado: [''],
  anos:[''],
  meses:[''],
  salario:[''],
  tipo_pago:[''],
  estado:['']
  });

 public putIndmeizacion(id:number){
  this.serviceIndemizacion.put('https://localhost:44317/api/Indemizacion/',id,{
    empleado: this.editForm.value.empleado,
    anos: this.editForm.value.anos,
    meses:this.editForm.value.meses,
    salario:this.editForm.value.salario,
    tipo_pago:this.editForm.value.tipo_pago,
    estado:this.editForm.value.estado
  }).subscribe(()=>{});
  confirm('Se edito correctamente!!');
 }

 pagarForm: FormGroup = this.fb.group({
  estado: []
});

public pagarPago(){
  this.serviceIndemizacion.pagar('https://localhost:44317/api/Indemizacion',{
    estado:this.pagarForm.value.estado
  }).subscribe(respuesta=>{});
  confirm('Se realizo el pago a todos correctamente!!');
}


  
}
