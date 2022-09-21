import { Component } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-page';
  constructor(private dialog:MatDialog){

  }
  openLogin(){
    this.dialog.open(LoginComponent)
  }
  openSignup(){
    this.dialog.open(SignupComponent)
  }
}
