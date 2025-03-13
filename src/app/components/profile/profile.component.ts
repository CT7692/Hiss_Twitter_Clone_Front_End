import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from '../../entities/user';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  users: User[] = [];

  constructor(private dataService: DataService) {
    this.dataService.getUsers().subscribe((response: User[]) => {
      this.users = response;
    });
  }
}
