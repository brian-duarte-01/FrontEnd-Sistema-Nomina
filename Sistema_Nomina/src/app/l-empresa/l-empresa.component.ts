import { Component, OnInit } from '@angular/core';
import { ApiEmpresaService } from '../api-empresa.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-l-empresa',
  templateUrl: './l-empresa.component.html',
  styleUrls: ['./l-empresa.component.css']
})
export class LEmpresaComponent implements OnInit {

    public Listar:any =[]

  constructor(private api: ApiEmpresaService,private fb: FormBuilder){}

  ngOnInit(): void {
    this.CargarData();
  }
  // listar
  public CargarData(){
    this.api.get('https://localhost:44329/api/empresa')
    .subscribe(respuesta =>{
      this.Listar = respuesta;
    })
  }
 // declarar variable para POST 1.2
 form: FormGroup = this.fb.group({
  nombre: new FormControl('',[Validators.required]),
  calle: new FormControl('',[Validators.required]),
  avenida: new FormControl('',[Validators.required]),
  zona: new FormControl('',[Validators.required]),
  telefono: new FormControl('',Validators.required),
  nit: new FormControl('',Validators.required),
  correo: new FormControl('', Validators.required)
 });
  // enviar datos
  public enviarData(){
   if(this.form.valid){
    this.api.post('https://localhost:44329/api/empresa',
    {
      nombre:this.form.value.nombre,
      calle:this.form.value.calle,
      avenida:this.form.value.avenida,
      zona:this.form.value.zona,
      telefono:this.form.value.telefono,
      nit:this.form.value.nit,
      correo:this.form.value.correo
    }
    )
    .subscribe(respuesta =>{
      console.log('Empresa enviada !!');
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
