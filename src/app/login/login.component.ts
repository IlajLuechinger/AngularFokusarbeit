import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Login} from "../login";
import {Person } from "../person";
import {LOCAL_STORAGE, WebStorageService} from "angular-webstorage-service";

import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  error: string;
  logInForm: FormGroup;
  login: Login = {};
  people: Person[] = [];
  loggedInPerson: Person;
  public data:any[];

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    @Inject( LOCAL_STORAGE) private storage: WebStorageService,
  ) {
    this.logInForm = this.formBuilder.group({
      mail: ['', Validators.required],
      password: ['', Validators.required]
  });
  }



  ngOnInit() {
  }

  onSubmit() {
    this.postLoginData();
    setTimeout(()=> this.getUser() ,1000);
    setTimeout(() => this.getLoggedInUser(), 1500);
    setTimeout(() =>this.router.navigate(['/projects']), 2000);

  }

  postLoginData(){
    const mail = this.logInForm.get('mail').value;
    const pw = this.logInForm.get('password').value;
    this.login.email = mail;
    this.login.password = pw;
    this.auth.postLoginData(this.login);
  }

  getUser() {
    this.auth.getUser().subscribe(data => this.people = data);
  }

  getLoggedInUser(){
    for (let o of this.people){
      this.loggedInPerson = o;
    }
  }

  checkUserNotNull(){
    if(this.loggedInPerson.personID != 0){
      this.saveInLocal(JSON.stringify(this.loggedInPerson.personID));

    } else {
      this.error = "Email oder Passwort ist falsch";
    }
  }

  saveInLocal(val){
    val = this.loggedInPerson.personID;
    let stringPersonID = val.toString();
    this.storage.set('user', stringPersonID);
    this.data['user'] = this.storage.get('user')
  }

  getFromLocal(){
    return this.data['user'] = this.storage.get('user');
  }
}
