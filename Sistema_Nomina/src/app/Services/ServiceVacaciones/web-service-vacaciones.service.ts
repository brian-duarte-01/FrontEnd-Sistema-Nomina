import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebServiceVacacionesService {

  constructor(private http:HttpClient) { }

  public get(url: string)
  {
    return this.http.get(url);
  }
}
