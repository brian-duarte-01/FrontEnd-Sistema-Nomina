import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebServiceEstadoService } from 'src/app/Services/ServiceEstado/web-service-estado.service';

@Component({
  selector: 'app-component-estado',
  templateUrl: './component-estado.component.html',
  styleUrls: ['./component-estado.component.css']
})
export class ComponentEstadoComponent {

  public listEstado: any = [];
  public obEstado: any = [];
  p: number = 1;


  public constructor
  (
    public serviceEstado: WebServiceEstadoService,
    private fb: FormBuilder
  ){}

  public ngOnInit():void
  {
    this.getEstado();
    this.obtenerEstado(0);
  }

  public getEstado()
  {
    this.serviceEstado.get('https://localhost:44317/api/Estado').subscribe(respuesta =>{
      this.listEstado = respuesta;
    })
  }



  form: FormGroup = this.fb.group({
    status:['',Validators.required]
  });

  public postEstado()
  {
    this.serviceEstado.post('https://localhost:44317/api/Estado',{
        status: this.form.value.status
    }).subscribe(respuesta=>{
    })
    this.form.reset();
    confirm('Se envio correctamente!!');
  }


  public deleteEmpresa(id:number)
  {
   this.serviceEstado.delete('https://localhost:44317/api/Estado/',id).subscribe(()=>{

   });
  }

  public obtenerEstado(id:number){
    this.serviceEstado.get('https://localhost:44317/api/Estado/'+id).subscribe(respuesta=>{
      this.obEstado = respuesta;
    });
  }

   editForm: FormGroup = this.fb.group({
    status:['']
   });

   public putEstado(id:number){
    this.serviceEstado.put('https://localhost:44317/api/Estado/',id,{
      status: this.editForm.value.status
    }).subscribe(()=>{});
    confirm('Se edito correctamente!!');
   }


}
