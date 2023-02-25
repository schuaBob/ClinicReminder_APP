import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [LoginService]
})
export class LoginPage {

  constructor(private fb: FormBuilder, private loginService: LoginService, private storageService: StorageService) { }
  loginForm = this.fb.group({
    username: ["patient32", Validators.required],
    password: ["patient32", Validators.required]
  });
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loginService.signin(this.loginForm.value["username"]!, this.loginForm.value["password"]!);
    }
  }
}
