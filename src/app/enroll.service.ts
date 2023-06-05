import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {
myUrl ="http://localhost:3000/register";
  constructor(private http:HttpClient ) { }


  userEnrollments(user: Register) {
    return this.http.post<any>(this.myUrl, user);
  }
}
