import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sidenav-logout',
  templateUrl: './sidenav-logout.component.html',
  styleUrls: ['./sidenav-logout.component.scss']
})
export class SidenavLogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['login']);
  }

}
