import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TableService {
  private apiUrl: string = "../../assets/Mocks/" ;
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    })
  };
  constructor(private httpClient: HttpClient) { }

  Table(tabla: string): Observable<any> {
    return this.httpClient.get<any>(
      this.apiUrl  + tabla + '.json' , this.httpOptions
    );

  }
}
