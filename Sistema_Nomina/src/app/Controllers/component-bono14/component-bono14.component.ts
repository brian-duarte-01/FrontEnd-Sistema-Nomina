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


}
