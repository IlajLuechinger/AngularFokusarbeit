import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Login} from "../login";
import {Person } from "../person";
import {LOCAL_STORAGE, SESSION_STORAGE, WebStorageService} from "angular-webstorage-service";

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
  loggedInPerson: Person = {};
  valid: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    @Inject( SESSION_STORAGE) private storage: WebStorageService,
  ) {
    this.logInForm = this.formBuilder.group({
      mail: ['', Validators.required],
      password: ['', Validators.required],
  });
  }



  ngOnInit() {

  }

  onSubmit() {
    this.postLoginData();
    setTimeout(()=> this.getUser() ,500);
    setTimeout(() =>this.router.navigate(['/projects']), 1000);

  }

  postLoginData(){
    const mail = this.logInForm.get('mail').value;
    const pw = this.logInForm.get('password').value;
    this.login.email = mail;
    this.login.password = pw;
    this.auth.postLoginData(this.login);
  }

  getUser() {
    this.auth.getUser().subscribe(data => {
        this.loggedInPerson = data;
        this.auth.addToSession(this.loggedInPerson);
    }
    );
  }
}
