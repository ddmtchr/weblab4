import {Component, OnInit} from '@angular/core';
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'weblabFourth';
  username: string = '';

  constructor(private keycloakService: KeycloakService) {
  }

  ngOnInit(): void {
    this.keycloakService.isLoggedIn().then((logged) => {
      if (logged) {
        console.log('logged in')
        if (window.location.pathname !== '/main') window.location.pathname = '/main'

        this.keycloakService.loadUserProfile().then((profile) => {
          console.log(profile.username)
        })
      } else {
        console.log('not logged in')
      }
    })
  }

}
