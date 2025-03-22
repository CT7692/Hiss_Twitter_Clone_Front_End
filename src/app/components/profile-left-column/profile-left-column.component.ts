import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { User } from '../../entities/user';
import { JwtService } from '../../services/jwt.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-left-column',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile-left-column.component.html',
  styleUrl: './profile-left-column.component.css',
})
export class ProfileLeftColumnComponent {
  user?: User;
  name?: any;
  currentUsername: any;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private jwtService: JwtService
  ) {
    this.ngOnInit();
  }

  updateProfile(newName: any) {
    this.name = newName;
    this.dataService.getUserByName(this.name).subscribe((response: User) => {
      this.user = response;
      this.currentUsername = this.jwtService.decodeToken().sub;
    });
  }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get('name');
    this.dataService.getUserByName(this.name).subscribe((response: User) => {
      this.user = response;
      this.currentUsername = this.jwtService.decodeToken().sub;
    });
  }
}
