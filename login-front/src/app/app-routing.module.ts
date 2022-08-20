import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './pages/admin/admin-dash/admin-dash.component';
import { ForgotPassComponent } from './pages/forgot-pass/forgot-pass.component';
import { LoginComponent } from './pages/login/login.component';
import { NormalDashComponent } from './pages/normal/normal-dash/normal-dash.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'forgot-pass',
    component: ForgotPassComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: AdminDashComponent,
    // pathMatch: 'full',
    canActivate: [AdminGuard]
  },
  {
    path: 'user-dash',
    component: NormalDashComponent,
    // pathMatch: 'full'
    canActivate: [NormalGuard]
  }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
