import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LEmpresaComponent } from './l-empresa/l-empresa.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpleadoComponent } from './empleado/empleado.component';
import { TipoPagoComponent } from './tipo-pago/tipo-pago.component';
import { EstadoComponent } from './estado/estado.component';
import { PagosComponent } from './pagos/pagos.component';


@NgModule({
  declarations: [
    AppComponent,
    LEmpresaComponent,
    EmpleadoComponent,
    TipoPagoComponent,
    EstadoComponent,
    PagosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
