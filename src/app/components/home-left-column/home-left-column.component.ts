import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { User } from '../../entities/user';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-home-left-column',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-left-column.component.html',
  styleUrl: './home-left-column.component.css'
})
export class HomeLeftColumnComponent {

  user?: User;
  constructor(private dataService: DataService){
    this.dataService.getCurrentUserInfo().subscribe((response: User) => {
      this.user = response;
    })
  }
}
