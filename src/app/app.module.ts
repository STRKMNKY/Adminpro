import { generate } from 'rxjs/observable/generate';
import { NgTools_InternalApi_NG_2_LazyRouteMap } from '@angular/compiler-cli/src/ngtools_api';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { APP_ROUTES } from './approutes';
import { RegisterComponent } from './register/register.component';

import { FormsModule } from '@angular/forms';

import { ServiceModule } from './services/service.module'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ServiceModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
