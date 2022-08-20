import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    username: '',
    password: '',
  };

  constructor(
    private _snack: MatSnackBar,
    private _login: LoginService,
  ) { }

  ngOnInit(): void {
  }

  clearForm(){
    this.loginData = {
      username: '',
      password: '',
    };
  }

  formSubmit(){
    
    if(this.loginData.username.trim() == '' && this.loginData.password.trim() == '' || this.loginData.username == null && this.loginData.password == null){
      this._snack.open('Please enter your credentials.', 'Ok', {
        verticalPosition: 'bottom',
        horizontalPosition: 'left',
        duration: 3000,
      });
      return;
    }
    else{
      if(this.loginData.username.trim() == null || this.loginData.username.trim() == ''){
        this._snack.open('Please enter your username.', 'Ok', {
          verticalPosition: 'bottom',
          horizontalPosition: 'left',
          duration: 3000,
        });
        return;
      }
  
      if(this.loginData.password.trim() == null || this.loginData.password.trim() == ''){
        this._snack.open('Please enter your password.', 'Ok', {
          verticalPosition: 'bottom',
          horizontalPosition: 'left',
          duration: 3000,
        });
        return;
      }

      // if(this.loginData.password.length < 8){
      //   this._snack.open('Password length should be more than 8 characters.', 'Ok', {
      //     verticalPosition: 'bottom',
      //     horizontalPosition: 'left',
      //     duration: 3000,
      //   });
      //   return;
      // }
    }

    // validate form: request server to generate token
    this._login.generateToken(this.loginData).subscribe(
      (data: any)=>{ 
        console.log('success');
        // console.log(data);

        // login
        this._login.loginUser(data.token);

        this._login.getCurrentUser().subscribe(
          (data: any)=>{
            this._login.setUser(data);
            console.log(data);

            // redirect role-wise
            if(this._login.getUserRole() == 'ADMIN'){
              window.location.href = '/admin';
              this._login.loginStatusSubject.next(true);
            }
            else if(this._login.getUserRole() == 'NORMAL'){
              window.location.href = '/user-dash';
              this._login.loginStatusSubject.next(true);
            }
            else{
              this._login.logout();
            }
          },
          (error: any)=>{

          }
        );
        
      },
      (error: any)=>{
        console.log('error occured');
        console.log(error);
        
        
      }
    );


  }


}
