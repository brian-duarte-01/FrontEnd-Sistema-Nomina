import { Component, OnInit } from '@angular/core';
import { ApiEstadoService } from '../api-estado.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit{

  //GET
  public Listar:any =[]


  constructor(private api:ApiEstadoService,private fb: FormBuilder){}
  

  ngOnInit(): void {
    this.CargarData();
  }



  //GET
  public CargarData(){
    this.api.get('https://localhost:44329/api/estado')
    .subscribe(respuesta =>{
      this.Listar = respuesta;
    })
  }

  //POST
 // declarar variable para POST 1.2
 form: FormGroup = this.fb.group({
  tipo_status: new FormControl('',[Validators.required]),
 });
 // enviar datos
 public enviarData(){
  if(this.form.valid){
   this.api.post('https://localhost:44329/api/estado',
   {
     tipo_status:this.form.value.tipo_status,
   }
   )
   .subscribe(respuesta =>{
     console.log('Estado enviado !!');
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
