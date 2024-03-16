import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = "http://localhost:4201/api/";


  constructor(
    private http: HttpClient,
  ) { }

  login_usuario(data: Usuario): Observable<any> {
    let headers = new HttpHeaders().set('content-Type', 'application/json');
    return this.http.post(this.url + 'login_usuario/', data, { headers: headers });
  }
  
  getToken() {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    try {
      const helper = new JwtHelperService();
      var decodedToken = helper.decodeToken(token);
      if (helper.isTokenExpired(token)) {
        localStorage.clear();
        return false;
      }
      if (!decodedToken) {
        localStorage.clear();
        return false;
      }
    } catch (error) {
      localStorage.clear();
      return false;
    }
    return true;
  }
}
