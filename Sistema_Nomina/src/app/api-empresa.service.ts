import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiEmpresaService {

  constructor(
    private http: HttpClient
  ) { }

    // para consumir la api
    public get(url:string){
      return this.http.get(url); //GET https://localhost:44329/api/empresa
    }

    public post(url:string, body: any){
      return this.http.post(url, body); //POST https://localhost:44329/api/empresa
    }

}