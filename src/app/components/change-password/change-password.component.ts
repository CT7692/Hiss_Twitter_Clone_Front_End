import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  Validators,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { DataService } from '../../services/data.service';
import { JwtService } from '../../services/jwt.service';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css',
})
export class ChangePasswordComponent {
  changePasswordForm: FormGroup;
  message?: string;
  alertClass?: string;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private jwtService: JwtService
  ) {
    this.changePasswordForm = this.fb.group({
      old_password: [null, [Validators.required, Validators.minLength(6)]],
      new_password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  get old_password() {
    return this.changePasswordForm.get('old_password');
  }

  get new_password() {
    return this.changePasswordForm.get('new_password');
  }

  onPasswordSubmitHandler() {

    console.log(this.changePasswordForm.value);

      this.dataService.updatePassword(this.changePasswordForm.value).subscribe((data:any) => {
        this.message = 'Password changed.';
        this.alertClass = 'alert alert-success';
      }), (error: any) => {
        this.message = 'Error occurred.';
        this.alertClass = 'alert alert-danger';
      }
      
  }
}
