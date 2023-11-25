import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CanvasComponent} from './components/canvas/canvas.component';
import {HeaderComponent} from './components/header/header.component';
import {MainFormComponent} from './components/main-form/main-form.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {TableComponent} from './components/table/table.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {SliderModule} from "primeng/slider";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        CanvasComponent,
        HeaderComponent,
        MainFormComponent,
        LoginFormComponent,
        TableComponent,
        LoginPageComponent,
        MainPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SliderModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
