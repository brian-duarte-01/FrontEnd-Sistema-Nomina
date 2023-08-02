import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LEmpresaComponent } from './l-empresa/l-empresa.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ApiTipoPagoService } from './api-tipo-pago.service';
import { TipoPagoComponent } from './tipo-pago/tipo-pago.component';
import { EstadoComponent } from './estado/estado.component';
import { PagosComponent } from './pagos/pagos.component';

const routes: Routes = [
  {path : 'empresa', component:LEmpresaComponent},
  {path: '', redirectTo: 'empresa', pathMatch:'full'},
  {path:'empleado', component:EmpleadoComponent},
  {path:'tipo-pago', component:TipoPagoComponent},
  {path:'estado', component:EstadoComponent},
  {path:'pagos',component:PagosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
