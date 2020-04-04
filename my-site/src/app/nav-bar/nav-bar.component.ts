import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  user: firebase.User;
  name: string;
  constructor(
    private auth: AuthService,
    private router: Router) {
  }

  ngOnInit() {
    this.auth.getUserState()
      .subscribe(user =>
        this.user = user);
  }
  login() {
    this.router.navigate(['login']);
  }

  logout() {
    this.router.navigate(['/login']);
    this.auth.logout();
  }

  register() {
    this.router.navigate(['register']);
  }

}
