import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CanvasComponent} from './components/canvas/canvas.component';
import {HeaderComponent} from './components/header/header.component';
import {MainFormComponent} from './components/main-form/main-form.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {TableComponent} from './components/table/table.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {SliderModule} from "primeng/slider";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8081',
        realm: 'front',
        clientId: 'frontend'
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false
      }
    });
}

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    HeaderComponent,
    MainFormComponent,
    LoginFormComponent,
    TableComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SliderModule,
    FormsModule,
    HttpClientModule,
    KeycloakAngularModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService]
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
