import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentIndexComponent } from './Controllers/Component-Index/component-index/component-index.component';
import { ComponentEmpresaComponent } from './Controllers/component-empresa/component-empresa.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ComponentEmpleadoComponent } from './Controllers/component-empleado/component-empleado.component';
import { ComponentTipoPagoComponent } from './Controllers/component-tipo-pago/component-tipo-pago.component';
import { ComponentEstadoComponent } from './Controllers/component-estado/component-estado.component';
import { ComponentPagoComponent } from './Controllers/component-pago/component-pago.component';
import { ComponentIndemizacionComponent } from './Controllers/component-indemizacion/component-indemizacion.component';
import { ComponentAguinaldoComponent } from './Controllers/component-aguinaldo/component-aguinaldo.component';
import { ComponentBono14Component } from './Controllers/component-bono14/component-bono14.component';
import { ComponentVacacionesComponent } from './Controllers/component-vacaciones/component-vacaciones.component';



@NgModule({
  declarations: [
    AppComponent,
    ComponentIndexComponent,
    ComponentEmpresaComponent,
    ComponentEmpleadoComponent,
    ComponentTipoPagoComponent,
    ComponentEstadoComponent,
    ComponentPagoComponent,
    ComponentIndemizacionComponent,
    ComponentAguinaldoComponent,
    ComponentBono14Component,
    ComponentVacacionesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
