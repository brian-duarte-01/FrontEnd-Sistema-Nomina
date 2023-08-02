import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiEmpleadoService {

  constructor(
    private http: HttpClient
  ) { }

      // GET
      public get(url:string){
        return this.http.get(url); //GET  https://localhost:44329/api/empleado
      }

      //POST
      public post(url:string, body: any){
        return this.http.post(url, body); //POST https://localhost:44329/api/empleado
      }

}
