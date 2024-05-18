import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WebServiceEmpleadoService } from 'src/app/Services/ServiceEmpleado/web-service-empleado.service';
import { WebserviceEmpresaService } from 'src/app/Services/ServiceEmpresa/webservice-empresa.service';

@Component({
  selector: 'app-component-empresa',
  templateUrl: './component-empresa.component.html',
  styleUrls: ['./component-empresa.component.css']
})
export class ComponentEmpresaComponent {

  public listEmpresa : any = [];

  p: number = 1;

  constructor(
    public serviceEmpresa: WebserviceEmpresaService,
    private fb:FormBuilder
  ){}

  public ngOnInit()
  {
    this.getEmpresa();
  }

  public getEmpresa()
  {
      this.serviceEmpresa.get('https://localhost:44317/api/Empresa').subscribe(
        respuesta =>{
          this.listEmpresa = respuesta
        }
      );
  }

  form: FormGroup = this.fb.group({
    nombre:[],
    calle:[],
    avenida:[],
    zona:[],
    telefono:[],
    nit:[],
    correo:[]
  });

  public postEmpresa()
  {
    this.serviceEmpresa.post('https://localhost:44317/api/Empresa',{
      nombre:this.form.value.nombre,
      calle:this.form.value.calle,
      avenida:this.form.value.avenida,
      zona:this.form.value.zona,
      telefono:this.form.value.telefono,
      nit:this.form.value.nit,
      correo:this.form.value.correo
    }).subscribe(()=>{
      this.getEmpresa();
    });
    this.form.reset();
    confirm('Se envio correctamente!!');
  }


  public deleteEmpresa(id:number)
  {
   this.serviceEmpresa.delete('https://localhost:44317/api/Empresa/',id).subscribe(()=>{

   });
  }



}
