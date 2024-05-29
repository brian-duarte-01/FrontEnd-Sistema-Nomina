import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebServiceEstadoService } from 'src/app/Services/ServiceEstado/web-service-estado.service';
import { WebServiceTipoPagoService } from 'src/app/Services/ServiceTipoPago/web-service-tipo-pago.service';
import { WebServiceVacacionesService } from 'src/app/Services/ServiceVacaciones/web-service-vacaciones.service';

@Component({
  selector: 'app-component-vacaciones',
  templateUrl: './component-vacaciones.component.html',
  styleUrls: ['./component-vacaciones.component.css']
})
export class ComponentVacacionesComponent {
  public listVacaciones: any =[];
  public buscarVacaciones: string ="";
  public listTipoPago: any=[];
  public listEstado: any=[];  
  public obVacaciones: any =[];
  p: number = 1;

  constructor(
    private apiService: WebServiceVacacionesService,
    public fb: FormBuilder,
    private apiTipoPago: WebServiceTipoPagoService,
    private apiEstado: WebServiceEstadoService
  ){}

  public ngOnInit()
  {
    this.getVacaciones();
    this.getTipoPago();
    this.getEstado(); 
    this.obtenerVacaciones(0);
  }

  public getVacaciones()
  {
    this.apiService.get('https://localhost:44317/api/Vacaciones/Buscar?empleado='+this.buscarVacaciones+'').subscribe(respuesta=>{
      this.listVacaciones = respuesta;
    });
  }



  form: FormGroup = this.fb.group({
     empleado:[''],
     meses:[''],
     sueldo:[''],
     tipo_pago:[''],
     estado:['']
  });

  public getTipoPago()
  {
    this.apiTipoPago.get('https://localhost:44317/api/TipoPago').subscribe(respuesta=>{
      this.listTipoPago = respuesta;
    })
  }

  public getEstado()
  {
   this.apiEstado.get('https://localhost:44317/api/Estado').subscribe(respuesta=>{
    this.listEstado = respuesta;
   }) 
  }

public postVacaciones()
{
  this.apiService.post('https://localhost:44317/api/Vacaciones',{
    empleado:this.form.value.empleado,
    meses:this.form.value.meses,
    sueldo:this.form.value.sueldo,
    tipo_pago:this.form.value.tipo_pago,
    estado:this.form.value.estado
  }).subscribe(respuesta=>{
  })

  this.form.reset();
  confirm('Se envio correctamente!!');
}

public deleteEmpresa(id:number)
{
 this.apiService.delete('https://localhost:44317/api/Vacaciones/',id).subscribe(()=>{

 });
}

public obtenerVacaciones(id:number)
{
  this.apiService.get('https://localhost:44317/api/Vacaciones/'+id).subscribe(respuesta=>{
    this.obVacaciones = respuesta;
  });
}

editForm: FormGroup = this.fb.group({
     empleado:[],
     meses:[],
     sueldo:[],
     tipo_pago:[],
     estado:[]
});

public putVacaciones(id:number)
{
  this.apiService.put('https://localhost:44317/api/Vacaciones/',id,{
    empleado:this.editForm.value.empleado,
    meses:this.editForm.value.meses,
    sueldo:this.editForm.value.sueldo,
    tipo_pago:this.editForm.value.tipo_pago,
    estado:this.editForm.value.estado
  }).subscribe(()=>{

  });
  confirm('Se edito correctamente!!');
}

pagarForm: FormGroup = this.fb.group({
  estado: []
});

public pagarPago(){
  this.apiService.pagar('https://localhost:44317/api/Vacaciones',{
    estado:this.pagarForm.value.estado
  }).subscribe(respuesta=>{});
  confirm('Se realizo el pago a todos correctamente!!');
}




}
