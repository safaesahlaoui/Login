import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective,FormGroup, Validators ,NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { User } from 'src/app/models/user';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,Validators.required)
  });

  users: User[] = []; 
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data:User[])=> {
      this.users = data;
    });
  }

  login(email:string, password:string): boolean {
    for(let i = 0; i < this.users.length; i++) {
      if(this.users[i].email == email && this.users[i].password == password){
        alert("secces")
        //this.router.navigate(['home']);
        return true;
      }
    }
    alert("denied!!!!!!!")
    return false;
  }

  get email(){
    return this.loginForm.get('email');
      
  }
  get password(){
    return this.loginForm.get('password');
  }

}
