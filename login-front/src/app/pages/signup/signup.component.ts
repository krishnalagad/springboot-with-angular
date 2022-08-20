import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  public user = {
    username: '',
    password: '',
    fName: '',
    mName: '',
    lName: '',
    mobile: '',
    email: '',
    image: '',
    gender: ''
  };

  x = {
    username: '',
    password: ''
  };

  selectedGender: any;
  
  genders: string[] = ['Male', 'Female', 'Transgender', 'Other'];

  constructor(
    private _snack: MatSnackBar,
    private _user: UserService,
    private _login: LoginService
  ) { }

  ngOnInit(): void {
    
  }

  formSubmit(){
    // console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      this._snack.open('Enter your username.', 'Ok', {
        horizontalPosition: 'start',
        verticalPosition: 'bottom',
        duration: 3000,
      });
      return;
    }
    if(this.user.password == '' || this.user.password == null){
      this._snack.open('Enter your password.', 'Ok', {
        horizontalPosition: 'start',
        verticalPosition: 'bottom',
        duration: 3000,
      });
      return;
    }
    if(this.user.fName == '' || this.user.fName == null){
      this._snack.open('Enter your first name.', 'Ok', {
        horizontalPosition: 'start',
        verticalPosition: 'bottom',
        duration: 3000,
      });
      return;
    }
    if(this.user.mName == '' || this.user.mName == null){
      this._snack.open('Enter your middle name.', 'Ok', {
        horizontalPosition: 'start',
        verticalPosition: 'bottom',
        duration: 3000,
      });
      return;
    }
    if(this.user.lName == '' || this.user.lName == null){
      this._snack.open('Enter your last name.', 'Ok', {
        horizontalPosition: 'start',
        verticalPosition: 'bottom',
        duration: 3000,
      });
      return;
    }
    if(this.user.mobile == '' || this.user.mobile == null){
      this._snack.open('Enter your mobile number.', 'Ok', {
        horizontalPosition: 'start',
        verticalPosition: 'bottom',
        duration: 3000,
      });
      return;
    }
    if(this.user.email == '' || this.user.email == null){
      this._snack.open('Enter your email.', 'Ok', {
        horizontalPosition: 'start',
        verticalPosition: 'bottom',
        duration: 3000,
      });
      return;
    }
    if(this.user.gender == '' || this.user.gender == null){
      this._snack.open('Select your gender.', 'Ok', {
        horizontalPosition: 'start',
        verticalPosition: 'bottom',
        duration: 3000,
      });
      return;
    }
    
    // addUser
    this._user.addUser(this.user).subscribe(
      (data: any)=>{
        // console.log(data);
        Swal.fire('Success', 'You have registered successfully in our system with ID ' + data.uId + '.', 'success');
        this.x.username = this.user.username;
        this.x.password = this.user.password;

        this._login.generateToken(this.x).subscribe(
          (data:any)=>{
            console.log('success');

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
                console.log(error);
                
              }
            );
            
          },
          (error: any)=>{
            console.log('error occured');
            console.log(error);
          }
        );


        this.user = {
          username: '',
          password: '',
          fName: '',
          mName: '',
          lName: '',
          mobile: '',
          email: '',
          image: '',
          gender: ''
        };
      },
      (error: any)=>{
        console.log(error);
        Swal.fire('Error', 'Something went wrong while processing your registration form. We value your patience.', 'error');
      }
    );

  }

  clearForm(){
    this.user = {
      username: '',
      password: '',
      fName: '',
      mName: '',
      lName: '',
      mobile: '',
      email: '',
      image: '',
      gender: ''
    };
  }

}
