import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }

  login(credentials) {
    return this.http.post('/api/authenticate', JSON.stringify(credentials))
      .map(response => {
        const result = response.json();
        if (result && result.token) {
          sessionStorage.setItem('token', result.token);
          return true;
        }
        return false;
      });
  }

  logout() {
    sessionStorage.removeItem('token');
  }

  isLoggedIn() {
    const jwtHelper = new JwtHelperService();
    const token = sessionStorage.getItem('token');
    if (!token) {
      return false;
    }
    // const expirationDate = jwtHelper.getTokenExpirationDate(token);
    const isExpired = jwtHelper.isTokenExpired(token);
    console.log("isLoggedIn isExpired  ",isExpired);

    return !isExpired;
    // return tokenNotExpired();
    // This method will do the same thing explained above.
    // Only diffrence is token value is not taken from sessionStorage
  }

  get currentUser() {
    const token = sessionStorage.getItem('token');
    if (!token) { return null; }

    return new JwtHelperService().decodeToken(token);
  }
}
