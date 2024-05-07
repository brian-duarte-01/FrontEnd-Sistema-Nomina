import { Component } from '@angular/core';
import { ServiceAguinaldoService } from 'src/app/Services/ServiceAguinaldo/service-aguinaldo.service';

@Component({
  selector: 'app-component-aguinaldo',
  templateUrl: './component-aguinaldo.component.html',
  styleUrls: ['./component-aguinaldo.component.css']
})
export class ComponentAguinaldoComponent {

  public ListAguinaldo: any=[];

  public buscarEmpeado: string ="";

  p: number = 1;

  constructor(private apiAguinaldo: ServiceAguinaldoService){}

  public ngOnInit()
  {
    this.getAguinaldo();
  }

  public getAguinaldo()
  {
    return this.apiAguinaldo.get('https://localhost:44317/api/Aguinaldo/Buscar?empleado='+this.buscarEmpeado+'').subscribe(resultado=>{
      this.ListAguinaldo = resultado;
    });
  }

}
