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
  p: number = 1;

  form: FormGroup = this.fb.group({
    status:['',Validators.required]
  });

  public constructor
  (
    public serviceEstado: WebServiceEstadoService,
    private fb: FormBuilder
  ){}

  public ngOnInit()
  {
    this.getEstado();
  }

  public getEstado()
  {
    this.serviceEstado.get('https://localhost:44317/api/Estado').subscribe(respuesta =>{
      this.listEstado = respuesta;
    });
  }

  public postEstado()
  {
    this.serviceEstado.post('https://localhost:44317/api/Estado',{
        status: this.form.value.status
    }).subscribe(respuesta=>{
      console.log('Se envio');
      location.href='http://localhost:4200/estado';
    });
  }

}
