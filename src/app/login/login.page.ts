import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{

  constructor(private fb: FormBuilder) { }
  loginForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required]
  });
  onSubmit(): void {
    if(this.loginForm.valid) {

      // this.loginService.signin(this.loginForm.value['username'], this.loginForm.value['password'])
    }
  }
}
