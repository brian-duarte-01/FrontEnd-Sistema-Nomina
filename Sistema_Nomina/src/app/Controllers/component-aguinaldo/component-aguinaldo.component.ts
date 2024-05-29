import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceAguinaldoService } from 'src/app/Services/ServiceAguinaldo/service-aguinaldo.service';
import { WebServiceEstadoService } from 'src/app/Services/ServiceEstado/web-service-estado.service';
import { WebServiceTipoPagoService } from 'src/app/Services/ServiceTipoPago/web-service-tipo-pago.service';

@Component({
  selector: 'app-component-aguinaldo',
  templateUrl: './component-aguinaldo.component.html',
  styleUrls: ['./component-aguinaldo.component.css']
})
export class ComponentAguinaldoComponent {

  public ListAguinaldo: any=[];

  public buscarEmpeado: string ="";
  public listTipoPago: any =[];
  public listEstado: any = [];
  public obAguinal: any =[];

  p: number = 1;

  constructor(
    private apiAguinaldo: ServiceAguinaldoService,
    private fb: FormBuilder,
    private apiTipoPago: WebServiceTipoPagoService,
    private apiEstado: WebServiceEstadoService
  ){}

  public ngOnInit()
  {
    this.getAguinaldo();
    this.getTipoPago();
    this.getEstado();
    this.obtenerAguinaldo(0);
  }

  public getAguinaldo()
  {
    return this.apiAguinaldo.get('https://localhost:44317/api/Aguinaldo/Buscar?empleado='+this.buscarEmpeado+'').subscribe(resultado=>{
      this.ListAguinaldo = resultado;
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
      this.apiEstado.get('https://localhost:44317/api/Estado').subscribe(repuesta=>{
        this.listEstado = repuesta;
      });
  }

  form: FormGroup = this.fb.group({
    empleado:[''],
    meses:[''],
    salario:[''],
    tipo_pago:[''],
    estado:['']
  });

  public postAguinaldo()
  {
    this.apiAguinaldo.post('https://localhost:44317/api/Aguinaldo',{
      empleado: this.form.value.empleado,
    meses: this.form.value.meses,
    salario: this.form.value.salario,
    tipo_pago: this.form.value.tipo_pago,
    estado: this.form.value.estado
    }).subscribe(respuesta=>{

    });

    this.form.reset();
    confirm('Se envio correctamente!!');
  }

  public deleteEmpresa(id:number)
  {
   this.apiAguinaldo.delete('https://localhost:44317/api/Aguinaldo/',id).subscribe(()=>{

   });
  }


  public obtenerAguinaldo(id:number){
    this.apiAguinaldo.get('https://localhost:44317/api/Aguinaldo/'+id).subscribe(respuesta=>{
      this.obAguinal = respuesta;
    });
  }


  editForm: FormGroup = this.fb.group({
    empleado:[''],
    meses:[''],
    salario:[''],
    tipo_pago:[''],
    estado:['']
  });

  public putAguinaldo(id:number){
    this.apiAguinaldo.put('https://localhost:44317/api/Aguinaldo/',id,{
      empleado: this.editForm.value.empleado,
      meses: this.editForm.value.meses,
      salario: this.editForm.value.salario,
      tipo_pago: this.editForm.value.tipo_pago,
      estado: this.editForm.value.estado
    }).subscribe(()=>{});
    confirm('Se edito correctamente!!');
  }

  pagarForm: FormGroup = this.fb.group({
    estado: []
  });
  
  public pagarPago(){
    this.apiAguinaldo.pagar('https://localhost:44317/api/Aguinaldo',{
      estado:this.pagarForm.value.estado
    }).subscribe(respuesta=>{});
    confirm('Se realizo el pago a todos correctamente!!');
  }


}
