import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'auth/signin';
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }
  signin(username: string, password: string) {
    this.http.post(this.url, {
      username,
      password
    }).pipe(first()).subscribe({
      next: (value) => {
        localStorage.setItem("user", JSON.stringify(value));
      },
      error: (error) => {
        console.error(error)
      },
      complete: () => {
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.router.navigateByUrl(returnUrl);
      }
    });
  }
}
