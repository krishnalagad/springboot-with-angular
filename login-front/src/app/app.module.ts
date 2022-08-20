import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './pages/login/login.component'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { SignupComponent } from './pages/signup/signup.component'; 
import { MatSelectModule } from '@angular/material/select'; 
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NavbarComponent } from './components/navbar/navbar.component'; 
import { FormsModule  } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar'; 
import { MatRadioModule } from '@angular/material/radio'; 
import { MatIconModule } from '@angular/material/icon'; 
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider'; 
import { authInterceptorProviders } from './services/auth.interceptor';
import { AdminDashComponent } from './pages/admin/admin-dash/admin-dash.component';
import { NormalDashComponent } from './pages/normal/normal-dash/normal-dash.component';
import { ForgotPassComponent } from './pages/forgot-pass/forgot-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    AdminDashComponent,
    NormalDashComponent,
    ForgotPassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    MatSnackBarModule,
    MatRadioModule,
    MatIconModule,
    HttpClientModule,
    MatDividerModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule { }
