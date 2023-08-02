import { Component, OnInit } from '@angular/core';
import { ApiTipoPagoService } from '../api-tipo-pago.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tipo-pago',
  templateUrl: './tipo-pago.component.html',
  styleUrls: ['./tipo-pago.component.css']
})
export class TipoPagoComponent implements OnInit {

  //GET
  public Listar:any =[]


  constructor(private api:ApiTipoPagoService,private fb: FormBuilder){}


  ngOnInit() {
    this.CargarData();
  }

  //GET
  public CargarData(){
    this.api.get('https://localhost:44329/api/tipo_pago')
    .subscribe(respuesta =>{
      this.Listar = respuesta;
    })
  }


  //POST
   // declarar variable para POST 1.2
 form: FormGroup = this.fb.group({
  tipo_pago1: new FormControl('',[Validators.required]),
 });


  // enviar datos
  public enviarData(){
    if(this.form.valid){
     this.api.post('https://localhost:44329/api/tipo_pago',
     {
       tipo_pago1:this.form.value.tipo_pago1,
     }
     )
     .subscribe(respuesta =>{
       console.log('Tipo de pago enviado !!');
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
