import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProfileComponent } from '../../components/profile/profile.component';

@Component({
  selector: 'app-profiles-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ProfileComponent],
  templateUrl: './profiles-page.component.html',
  styleUrl: './profiles-page.component.css'
})
export class ProfilesPageComponent {

}
