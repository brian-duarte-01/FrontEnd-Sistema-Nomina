import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebServiceEmpleadoService {

  constructor(private http: HttpClient) { }

  public get(url: string)
  {
   return this.http.get(url);
  }

  public post(url:string, body: any)
  {
    return this.http.post(url,body);
  }

  public delete(url:string, id:number)
  {
    return this.http.delete(url+id);
  }
}
