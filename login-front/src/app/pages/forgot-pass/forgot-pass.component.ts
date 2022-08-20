import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  otpData: any;

  data = {
    username: '',
    email: ''
  };

  passwordData = {
    password: '',
    confirmPass: ''
  };

  flag = false;
  success = false;
  vari = false;

  constructor(
    private _snack: MatSnackBar,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  enable(){
    if(this.data.username.trim() == '' || this.data.username.trim() == null){
      this._snack.open('Please enter your username', 'Ok', {
        verticalPosition: 'bottom',
        horizontalPosition: 'left',
        duration: 3000
      });
      return;
    }

    this.flag = true;
    this.vari = true;
  }

  enableNewPass(){
    if(this.otpData == '' || this.otpData == null){
      this._snack.open('Enter OTP received on your email.', 'Ok', {
        verticalPosition: 'bottom',
        horizontalPosition: 'left',
        duration: 3000
      });
      return;
    }
    this.success = true;
    // console.log(this.otpData);
    
  }

  saveChange(){
    if(this.passwordData.password.trim() == '' || this.passwordData.password.trim() == null){
      this._snack.open('Please enter new password.', 'Ok', {
        horizontalPosition: 'left',
        verticalPosition: 'bottom',
        duration: 3000,
      });
      return;
    }
    if(this.passwordData.confirmPass.trim() == '' || this.passwordData.confirmPass.trim() == null){
      this._snack.open('Please enter confirm password.', 'Ok', {
        horizontalPosition: 'left',
        verticalPosition: 'bottom',
        duration: 3000,
      });
      return;
    }
    // let raw = this.passwordData.password.trim();
    if(this.passwordData.password.trim() != this.passwordData.confirmPass.trim()){
      this._snack.open('New password should match with confirm passowrd.', 'Ok', {
        horizontalPosition: 'left',
        verticalPosition: 'bottom',
        duration: 3000
      });
      return;
    }

    // change password
    this._router.navigate(['']);

  }

}
