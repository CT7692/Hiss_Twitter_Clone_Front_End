import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProfileLeftColumnComponent } from '../../components/profile-left-column/profile-left-column.component';
import { ProfileRightColumnComponent } from '../../components/profile-right-column/profile-right-column.component';

@Component({
  selector: 'app-single-profile-page',
  standalone: true,
  imports: [NavbarComponent, 
    FooterComponent, 
    ProfileLeftColumnComponent,
    ProfileRightColumnComponent],
  templateUrl: './single-profile-page.component.html',
  styleUrl: './single-profile-page.component.css'
})
export class SingleProfilePageComponent {

}
