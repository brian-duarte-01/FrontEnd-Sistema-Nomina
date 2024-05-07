import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentIndexComponent } from './Controllers/Component-Index/component-index/component-index.component';
import { ComponentEmpresaComponent } from './Controllers/component-empresa/component-empresa.component';
import { ComponentEmpleadoComponent } from './Controllers/component-empleado/component-empleado.component';
import { ComponentTipoPagoComponent } from './Controllers/component-tipo-pago/component-tipo-pago.component';
import { ComponentEstadoComponent } from './Controllers/component-estado/component-estado.component';
import { ComponentPagoComponent } from './Controllers/component-pago/component-pago.component';
import { ComponentIndemizacionComponent } from './Controllers/component-indemizacion/component-indemizacion.component';
import { ComponentAguinaldoComponent } from './Controllers/component-aguinaldo/component-aguinaldo.component';


const routes: Routes = [
  {path:'Index', component: ComponentIndexComponent},
  {path: '', redirectTo: 'Index', pathMatch:'full'},
  {path:'empresa',component: ComponentEmpresaComponent},
  {path:'empleado', component: ComponentEmpleadoComponent},
  {path:'tipo-pago', component: ComponentTipoPagoComponent},
  {path:'estado', component: ComponentEstadoComponent},
  {path:'pago', component: ComponentPagoComponent},
  {path:'indemizacion', component: ComponentIndemizacionComponent},
  {path:'aguinaldo', component:ComponentAguinaldoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
