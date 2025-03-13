import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { User } from '../../entities/user';
import { Router, RouterModule } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, 
  FormGroup, 
  ReactiveFormsModule,
  Validators } from '@angular/forms';


@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [FooterComponent, CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  user: User = {};
  message = "";
  alertClass = "";
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthServiceService) {
    this.registerForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      username: [null, [Validators.required, Validators.minLength(3)]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  get email(){
    return this.registerForm.get("email");
  }

  get username(){
    return this.registerForm.get("username");
  }

  get password(){
    return this.registerForm.get("password");
  }

  onSubmitHandler(data: any){
    console.log(data);
    this.user.imageURL = "/logo.png";
    this.user.email = data.email;
    this.user.name = data.username;
    this.user.password = data.password;

    this.authService.register(this.user).subscribe((data:any) => {
      this.message = "User registered successfully.";
      this.alertClass = "alert alert-success";
    }, (error: any) => {
      this.message = "Error occurred in registration.";
      this.alertClass = "alert alert-danger";
    });

  }
}
