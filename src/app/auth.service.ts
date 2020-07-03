import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) {
    sessionStorage.setItem('valid', "false")
  }


  //Hier werden die Daten an http://www.localhost:8080/loginData gesendet
  postLoginData(login){
    const url = "http://www.localhost:8080/loginData";
    this.http.post(url, login).subscribe();
  }


  //Lest das JSON von http://localhost:8080/loginData/user
  getUser(): Observable<Boolean> {
    const url ="http://localhost:8080/loginData/user";
    return this.http.get<Boolean>(url);
  }

  //Entfernt die Session und navigiert zum Login
  logout(){
    localStorage.removeItem('valid');
    this.router.navigate([''])
  }

  //Der Wert wird der Session hinzugefügt
  addToSession(valid: Boolean) {
    sessionStorage.setItem('valid', JSON.stringify(valid));
  }

  //Gibt den Wert der Session zurück
  getFromSession(): string{
    return sessionStorage.getItem('valid');
  }

}
