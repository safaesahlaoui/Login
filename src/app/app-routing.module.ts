import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [

 
  {
    path:'welcome',
    component:WelcomeComponent
  }
  
];

@NgModule({
  imports: [
    CommonModule
    ,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
