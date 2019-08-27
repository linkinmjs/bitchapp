import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IClient } from '../models/client.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  public _url:string;

  constructor(private http: HttpClient) {
    this._url='https://bitchapp-back.herokuapp.com/clients';
  }

  getClients(): Observable<IClient[]>{
    return this.http.get<IClient[]>(this._url);
  }

}
