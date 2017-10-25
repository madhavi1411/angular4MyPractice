import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guard/auth.guard';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { HttpClient } from './services/HttpClient';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent],

  providers: [
    AuthService,
    AuthGuard,
    // HttpClient ,// without Interceptor
  ]
  
})
export class AuthModule { }
