import { Component, OnInit } from '@angular/core';
import { ApiEmpleadoService } from '../api-empleado.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiEmpresaService } from '../api-empresa.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  // GET
  public Listar:any =[]
  //GET

  //empresa
  public Listar1:any =[]


  constructor(private api: ApiEmpleadoService, private apiEmpresa:ApiEmpresaService , private fb: FormBuilder){}


  ngOnInit(): void {
    this.CargarData();
    this.CargarDataEmpresa();
  }

    // GET
  public CargarData(){
    this.api.get('https://localhost:44329/api/empleado')
    .subscribe(respuesta =>{
      this.Listar = respuesta;
    })
  }

  //listar empresas
  public CargarDataEmpresa(){
    this.apiEmpresa.get('https://localhost:44329/api/empresa')
    .subscribe(respuesta =>{
      this.Listar1 = respuesta;
    })
  }





  // POST

  // declarar variable para POST 1.2
 form: FormGroup = this.fb.group({
  primer_nombre: new FormControl('',[Validators.required]),
  segundo_nombre: new FormControl('',[Validators.required]),
  primer_apellido: new FormControl('',[Validators.required]),
  segundo_apellido: new FormControl('',[Validators.required]),
  nit: new FormControl('',Validators.required),
  calle: new FormControl('',[Validators.required]),
  avenida: new FormControl('',[Validators.required]),
  zona: new FormControl('',[Validators.required]),
  telefono: new FormControl('',Validators.required),
  correo: new FormControl('', Validators.required),
  id_empresa: new FormControl('',Validators.required),
 });

 // enviar datos
 public enviarData(){
  if(this.form.valid){
   this.api.post('https://localhost:44329/api/empleado',
   {
    primer_nombre:this.form.value.primer_nombre,
    segundo_nombre:this.form.value.segundo_nombre,
    primer_apellido:this.form.value.primer_apellido,
    segundo_apellido:this.form.value.segundo_apellido,
    nit:this.form.value.nit,
     calle:this.form.value.calle,
     avenida:this.form.value.avenida,
     zona:this.form.value.zona,
     telefono:this.form.value.telefono,
     correo:this.form.value.correo,
     id_empresa:this.form.value.id_empresa,
   }
   )
   .subscribe(respuesta =>{
     console.log('Empleado enviado !!');
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
