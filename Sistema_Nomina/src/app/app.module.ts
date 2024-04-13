import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentEstadoComponent } from './Controllers/ComponentEstado/component-estado/component-estado.component';
import { ComponentIndexComponent } from './Controllers/Component-Index/component-index/component-index.component';



@NgModule({
  declarations: [
    AppComponent,
    ComponentEstadoComponent,
    ComponentIndexComponent,
    
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
