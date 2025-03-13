import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import { ReactiveFormsModule,
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule, FooterComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  message = "";
  alertClass = "";
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthServiceService, private router: Router) {
    this.loginForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  get name() {
    return this.loginForm.get("name");
  }

  get password() {
    return this.loginForm.get("password");
  }

  onSubmitHandler(user: any) {
    this.authService.login(this.loginForm.value).subscribe(
      (data) => {
        this.authService.setUser(user);
        this.message = "Login successful.";
        this.alertClass = "alert alert-success";
        localStorage.setItem("token", data.token);
        this.router.navigateByUrl("/");
      },
      (error) => {
        this.message = "Login failed.";
        this.alertClass = "alert alert-danger";
      }
    );
  }
}
