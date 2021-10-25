import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private apiUrl: string = "../../assets/Mocks/" ;
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    })
  };
  constructor(private httpClient: HttpClient) { }

  Login(email: string, password: string): Observable<any> {
    return this.httpClient.get<any>(
      this.apiUrl  + 'user.json' + '?email=' + email + "&password=" + password ,this.httpOptions
    );

  }
  getMenus(tabla: string[]): Observable<any> {
    return this.httpClient.get<any>(
      this.apiUrl   + 'menus.json' , this.httpOptions
    );

  }

  
}
