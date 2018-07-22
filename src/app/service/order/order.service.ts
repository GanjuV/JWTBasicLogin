import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
// import { AuthHttp } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: Http) { }
    // ,private authHttp: AuthHttp

  getOrders() {
    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'));

    const options = new RequestOptions({ headers });
    // When we use authHttp all this code is already written in the library.
    return this.http.get('/api/orders', options)
      .map(response => response.json());
  }
}
