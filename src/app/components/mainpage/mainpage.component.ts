import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent {

  constructor(private router: Router, public socialAuthService: SocialAuthService) {}

  logout(): void {
    this.socialAuthService.signOut()
      .then(() => this.router.navigate(['login'])
        .then(() => {
          window.location.href = window.location.protocol + '//' + window.location.host + '/login';
      }));
  }

}
