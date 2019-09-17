import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ISites } from "./../models/sites.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MonitorService {

  private _url: string;

  constructor(private http: HttpClient) {
    this._url = 'https://bitchapp-back.herokuapp.com/aws';
  }

  getSites(): Observable<ISites[]> {
    return this.http.get<ISites[]>(this._url);
  }

}
