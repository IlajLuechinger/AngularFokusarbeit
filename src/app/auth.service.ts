import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) {
    let user = this.getUser();
    sessionStorage.setItem('valid', "false")

  }


  postLoginData(login){
    const url = "http://www.localhost:8080/loginData";
    console.log(login);
    this.http.post(url, login).subscribe();
  }



    getUser(): Observable<Boolean> {
    const url ="http://localhost:8080/loginData/user";
    return this.http.get<Boolean>(url);
  }

  logout(){
    localStorage.removeItem('valid');
    this.deletePerson();
    this.router.navigate([''])
  }

  addToSession(valid: Boolean) {
    sessionStorage.setItem('valid', JSON.stringify(valid));
  }

  getFromSession(): string{
    return sessionStorage.getItem('valid');
  }

  deletePerson() {
    this.http.delete("http://www.localhost:8080/loginData/user");
  }

}
