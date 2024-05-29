import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebserviceEmpresaService {

  constructor(private http: HttpClient) { }

  public get(url: string)
  {
    return this.http.get(url);
  }

  public post(url:string, body: any)
  {
    return this.http.post(url, body);
  }
  

  public delete(url:string, id:number)
  {
    return this.http.delete(url+id);
  }

  public obtener(url:string, id:number){
    return this.http.get(url+id);
  }

  public put(url:string,id:number,body:any){
    return this.http.put(url+id,body);
  }
}
