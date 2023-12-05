import {Component, OnInit} from '@angular/core';
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username!: string | undefined

  constructor(private keycloakService: KeycloakService) {
  }

  ngOnInit(): void {
    this.keycloakService.loadUserProfile()
      .then((profile) => {
        this.username = profile.username
      })
  }

  logout() {
    this.keycloakService.logout()
      .then(() => {
        this.username = undefined
      })
  }
}
