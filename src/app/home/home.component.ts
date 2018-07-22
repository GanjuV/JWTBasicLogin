import { Component } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { AnimationHelper } from '../router.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [AnimationHelper.moveIn, AnimationHelper.fallIn]
})
export class HomeComponent {

  constructor(
    private authService: AuthService) { }

  isLoggedIn() {
    this.authService.isLoggedIn();
  }

}
