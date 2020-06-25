import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {Observable, of} from "rxjs";
import {Person} from "./person";
import {HttpClient} from "@angular/common/http";
import {timeout} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }


  postLoginData(login){
    const url = "http://www.localhost:8080/loginData";
    this.http.post(url, login).subscribe(data=> console.log(data));
  }



    getUser(): Observable<Person[]> {
    const url ="http://localhost:8080/loginData/user";
    return this.http.get<Person[]>(url).pipe(
      timeout(2000))
  }



  logout(){
    localStorage.removeItem('personId');
    this.router.navigate([''])
  }

}
