import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private authService: AuthServiceService, private router: Router){}

  canActivate(): boolean {
      if(this.authService.getToken()) {
        return true;
      }

      else{
        this.router.navigateByUrl("/login");
        return false;
      }
  }
}