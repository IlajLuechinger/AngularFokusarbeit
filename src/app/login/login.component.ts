import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logInForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) {
    this.logInForm = this.formBuilder.group({
      mail: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  ngOnInit() {

  }

  onSubmit() {
    /*const mail = this.logInForm.get('mail').value;
    const pw = this.logInForm.get('password').value;
    const mailPw = mail +";" + pw;
    console.log(mailPw)
    this.http.post<any>('http://localhost:8080/upload', mailPw);*/
  }

}
