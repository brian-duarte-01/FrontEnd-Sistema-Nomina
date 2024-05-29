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

  public obEmpleado: any = [];

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
    this.ObtenerEmpleado(0);
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

  public ObtenerEmpleado(id:number){
    this.webEmpleado.get('https://localhost:44317/api/Empleado/'+id).subscribe(respuesta=>{
      this.obEmpleado = respuesta
    });
  }

  editForm: FormGroup = this.fb.group({
    primer_nombre:[],
    segundo_nombre:[],
    primer_apellido:[],
    segundo_apellido:[],
    nit:[],
    calle:[],
    avenida:[],
    zona:[],
    telefono:[],
    correo:[],
    empresa:[]
  });

  public put(id:number){
    this.webEmpleado.put('https://localhost:44317/api/Empleado/',id,{
      primer_nombre: this.editForm.value.primer_nombre,
    segundo_nombre: this.editForm.value.segundo_nombre,
    primer_apellido: this.editForm.value.primer_apellido,
    segundo_apellido: this.editForm.value.segundo_apellido,
    nit: this.editForm.value.nit,
    calle: this.editForm.value.calle,
    avenida: this.editForm.value.avenida,
    zona: this.editForm.value.zona,
    telefono: this.editForm.value.telefono,
    correo: this.editForm.value.correo,
    empresa: this.editForm.value.empresa
    }).subscribe(()=>{});
    confirm('Se edito correctamente!!');
  }

}
