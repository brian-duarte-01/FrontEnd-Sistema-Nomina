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

}
