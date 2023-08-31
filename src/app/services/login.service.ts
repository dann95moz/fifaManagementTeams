import { Injectable } from '@angular/core';
import { environments } from '../environements/environments.dev';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  ApiUrl = ''
   headers = new HttpHeaders({
    cookie: 'JSESSIONID=BB6E94483AA514E674483267F105AB7E'
  });
  constructor(private http: HttpClient) { 
    this.ApiUrl= environments.login
  }

  login(username: string, password: string): Observable<any> {
    console.log(this.ApiUrl);
    
    const headers = new HttpHeaders({
      'Content-Type': 'text/html;charset=UTF-8',
      'Content-Language': 'en-US',
    });
    const body = {
  
    }
  return  this.http.post<any>(this.ApiUrl,{username,password},{headers})
 }

}
