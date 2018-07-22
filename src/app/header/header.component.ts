import { Component } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  envVersion = environment.version;
  constructor(
    private router: Router,
    private authService: AuthService) { }


  logout() {
    this.authService.logout();
    this.router.navigate(['/logout']);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  isAdmin() {
    return this.authService.currentUser.admin;
  }
}
