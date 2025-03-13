import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-change-pic',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './change-pic.component.html',
  styleUrl: './change-pic.component.css'
})
export class ChangePicComponent {

  changeImageForm: FormGroup;
  message?: string;
  alertClass?: string;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService) {

      this.changeImageForm = this.fb.group({
        new_img_url: [null, [Validators.required]]
      });
    }

    get new_img_url() {
      return this.changeImageForm?.get('new_img_url');
    }

    onImageSubmitHandler() {
      console.log(this.changeImageForm);
        this.dataService.updatePicture(this.changeImageForm.value).subscribe((data: any) => {
          this.message = "Image updated."
          this.alertClass = "alert alert-success";
        }, (error: any) => {
          this.message = "Image file not found.";
          this.alertClass = "alert alert-danger";
        });
      
    }

    

}
