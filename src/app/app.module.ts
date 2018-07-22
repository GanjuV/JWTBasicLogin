import { MockBackend } from '@angular/http/testing';
import { fackBackendProvider } from './mock-backend/fake-backend';
import { AuthService } from './service/auth/auth.service';
import { OrderService } from './service/order/order.service';
import { AuthGuard } from './service/auth-guard/auth-guard.service';
import { AdminAuthGuard } from './service/admin-auth-guard/admin-auth-guard.service';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { NgModule } from '@angular/core';
import { Routing } from './app.routing';
// import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NoAccessComponent } from './noaccess/noaccess.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { LogoutComponent } from './logout/logout.component';
import { MembersComponent } from './members/members.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    NoAccessComponent,
    HeaderComponent,
    BodyComponent,
    LogoutComponent,
    MembersComponent
  ],
  imports: [
  BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    Routing
  ],
  providers: [
    OrderService,
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    // AUTH_PROVIDERS,

    fackBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
