import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {Observable, of} from "rxjs";
import {Person} from "./person";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) {
    let user = this.getUser();
    sessionStorage.setItem('isLoggedIn', "false")

  }


  postLoginData(login){
    const url = "http://www.localhost:8080/loginData";
    this.http.post(url, login).subscribe();
  }



    getUser(): Observable<Person> {
    const url ="http://localhost:8080/loginData/user";
    return this.http.get<Person>(url);
  }

  logout(){
    localStorage.removeItem('valid');
    this.router.navigate([''])
  }

  addToSession(person: Person) {
    sessionStorage.setItem('valid', JSON.stringify(person));
  }

  setSession(valid: string){
    sessionStorage.setItem('valid', valid)
  }

  getFromSession(): string{
    return sessionStorage.getItem('valid');
  }

}
