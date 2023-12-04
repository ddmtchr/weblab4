import {Component} from '@angular/core';
import {KeycloakService} from "keycloak-angular";

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  constructor(private keycloakService: KeycloakService) {
  }

  getUsername(): string {
    return this.keycloakService.getUsername()
  }
}
