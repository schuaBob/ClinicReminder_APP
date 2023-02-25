import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { StorageService } from './storage.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'auth/signin';
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private storageService: StorageService
  ) { }

  signin(username: string, password: string) {
    this.http.post(this.url, {
      username,
      password
    }).pipe(first()).subscribe({
      next: async (value) => {
        await this.storageService.set("user", JSON.stringify(value))
      },
      error: (error) => {
        console.error(error)
      },
      complete: () => {
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.router.navigate([returnUrl]);
      }
    });
  }
}
