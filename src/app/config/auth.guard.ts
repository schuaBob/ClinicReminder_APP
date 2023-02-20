import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, storageService: StorageService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const logined = "";

    if (logined) {
      console.log("pass")
      return true;
    } else {
      console.log("nopass")
      this.router.navigate(['/login']);
      return false;
    }

  }

}
