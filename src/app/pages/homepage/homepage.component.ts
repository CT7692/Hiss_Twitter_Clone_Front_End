import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HomeLeftColumnComponent } from '../../components/home-left-column/home-left-column.component';
import { HomeRightColumnComponent } from '../../components/home-right-column/home-right-column.component';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { JwtService } from '../../services/jwt.service';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, 
    HomeLeftColumnComponent, HomeRightColumnComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  constructor(public authService: AuthServiceService, 
    private router: Router,
    private dataService: DataService,
    private jwtService: JwtService) {
    
      const token = localStorage.getItem("token");

      if(this.jwtService.isTokenExpired(token))
        this.router.navigateByUrl("/login");

  }

}
