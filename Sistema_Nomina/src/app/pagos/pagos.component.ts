import { Component, OnInit } from '@angular/core';
import { ApiPagosService } from '../api-pagos.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiEmpleadoService } from '../api-empleado.service';
import { ApiTipoPagoService } from '../api-tipo-pago.service';
import { ApiEstadoService } from '../api-estado.service';


@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit{

  //GET
  public Listar:any =[]
  public listarEmpleado:any=[]
  public listarTipo:any=[]
  public listarEstado:any=[]


  constructor(private apiEmpleado: ApiEmpleadoService,private apiTipo: ApiTipoPagoService,private apiEstado: ApiEstadoService,private api:ApiPagosService,private fb: FormBuilder){}

  
  ngOnInit(): void {
    this.CargarData();
    this.CargarDataEmpleado();
    this.CargarDataTipo();
    this.CargarDataEstado();
  }


  //GET
  public CargarData(){
    this.api.get('https://localhost:44329/api/pagos')
    .subscribe(respuesta =>{
      this.Listar = respuesta;
    })
  }
  public CargarDataEmpleado(){
    this.apiEmpleado.get('https://localhost:44329/api/empleado')
    .subscribe(respuesta =>{
      this.listarEmpleado = respuesta;
    })
  }
  public CargarDataTipo(){
    this.apiTipo.get('https://localhost:44329/api/tipo_pago')
    .subscribe(respuesta =>{
      this.listarTipo = respuesta;
    })
  }
  public CargarDataEstado(){
    this.apiEstado.get('https://localhost:44329/api/estado')
    .subscribe(respuesta =>{
      this.listarEstado = respuesta;
    })
  }





  //POST
   // declarar variable para POST 1.2
 form: FormGroup = this.fb.group({
  id_empleado: new FormControl('',[Validators.required]),
  salario: new FormControl('',[Validators.required]),
  igss: new FormControl('',[Validators.required]),
  bonificacion: new FormControl('',[Validators.required]),
  liquido: new FormControl('',[Validators.required]),
  id_tipo_pago: new FormControl('',[Validators.required]),
  id_status: new FormControl('',[Validators.required]),
 });
 // enviar datos
 public enviarData(){
  if(this.form.valid){
   this.api.post('https://localhost:44329/api/pagos',
   {
     id_empleado:this.form.value.id_empleado,
     salario:this.form.value.salario,
     igss:this.form.value.igss,
     bonificacion:this.form.value.bonificacion,
     liquido:this.form.value.liquido,
     id_tipo_pago:this.form.value.id_tipo_pago,
     id_status:this.form.value.id_status,
     
   }
   )
   .subscribe(respuesta =>{
     console.log('Pago enviado !!');
     this.form.reset();
     this.CargarData();
   })
   confirm('Se envio correctamente');
  }
  else{
   confirm('no se envio correctamente');
  }
 }



}
