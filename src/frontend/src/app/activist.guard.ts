import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './services/users.service';

@Injectable({
  providedIn: 'root'
})
export class ActivistGuard implements CanActivate {
  constructor(private user_sevice: UsersService, private router: Router){}
  canActivate(): boolean {
    if(this.user_sevice.is_logged_in()){
      if(this.user_sevice.is_user_admin()){
        this.router.navigate(['/admin-dashboard'])
        return false
      }
      return true;
    }
    this.router.navigate([''])
    return false;
  }
  
}
