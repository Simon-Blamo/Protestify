import { UsersService } from './services/users.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private user_sevice: UsersService, private router: Router){}
  canActivate(): boolean {
    if(this.user_sevice.is_logged_in()){
      if(this.user_sevice.is_user_admin()){
        this.router.navigate(['/admin-dashboard'])
      } else {
        this.router.navigate(['/dashboard'])
      }
      return false;
    }
    return true;
  }
  
}
