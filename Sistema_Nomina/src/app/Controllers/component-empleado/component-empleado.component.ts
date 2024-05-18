import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WebServiceEmpleadoService } from 'src/app/Services/ServiceEmpleado/web-service-empleado.service';
import { WebserviceEmpresaService } from 'src/app/Services/ServiceEmpresa/webservice-empresa.service';

@Component({
  selector: 'app-component-empleado',
  templateUrl: './component-empleado.component.html',
  styleUrls: ['./component-empleado.component.css']
})
export class ComponentEmpleadoComponent {

  public listEmpleado: any = [];
  public listEmpresa: any = [];

  p: number = 1;

  public BuscarEmpleado: string ="";


  constructor(
    private webEmpleado: WebServiceEmpleadoService,
    private fb: FormBuilder,
    private apiEmpresa: WebserviceEmpresaService
  ){}

  public ngOnInit()
  {
    this.getEmpleado();
    this.getEmpresa();
  }

  public getEmpleado()
  {
      this.webEmpleado.get('https://localhost:44317/api/Empleado/Buscar?nit='+this.BuscarEmpleado+'').subscribe(respuesta=>{
        this.listEmpleado = respuesta;
      });
  }


  public getEmpresa()
  {
    this.apiEmpresa.get('https://localhost:44317/api/Empresa').subscribe(respuesta=>{
      this.listEmpresa = respuesta;
    });
  }


  form: FormGroup = this.fb.group({
    primer_nombre:[''],
    segundo_nombre:[''],
    primer_apellido:[''],
    segundo_apellido:[''],
    nit:[''],
    calle:[''],
    avenida:[''],
    zona:[''],
    telefono:[''],
    correo:[''],
    empresa:['']
  });

  public postEmpleado()
  {
    this.webEmpleado.post('https://localhost:44317/api/Empleado',{
    primer_nombre: this.form.value.primer_nombre,
    segundo_nombre: this.form.value.segundo_nombre,
    primer_apellido: this.form.value.primer_apellido,
    segundo_apellido: this.form.value.segundo_apellido,
    nit: this.form.value.nit,
    calle: this.form.value.calle,
    avenida: this.form.value.avenida,
    zona: this.form.value.zona,
    telefono: this.form.value.telefono,
    correo: this.form.value.correo,
    empresa: this.form.value.empresa
    }).subscribe(respuesta=>{
    });

    this.form.reset();
    confirm('Se envio correctamente!!');
  }

  public deleteEmpleado(id:number)
  {
    this.webEmpleado.delete('https://localhost:44317/api/Empleado/',id).subscribe(()=>{});
  }
}
