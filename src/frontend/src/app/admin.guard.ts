import { UsersService } from './services/users.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  token: any
  decoded: any
  constructor(private userService: UsersService, private router: Router) {}
  canActivate(): boolean {
    if(this.userService.get_user_role()){
      return true;
    } else {
      this.router.navigate(['/dashboard'])
      return false;
    }
  }
  
}
