import { Component, EventEmitter, Output } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProfileLeftColumnComponent } from '../../components/profile-left-column/profile-left-column.component';
import { ProfileRightColumnComponent } from '../../components/profile-right-column/profile-right-column.component';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-single-profile-page',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    ProfileLeftColumnComponent,
    ProfileRightColumnComponent,
  ],
  templateUrl: './single-profile-page.component.html',
  styleUrl: './single-profile-page.component.css',
})
export class SingleProfilePageComponent {
  @ViewChild(ProfileLeftColumnComponent) pLefCol?: ProfileLeftColumnComponent;

  name: any;

  onProfileChange(newName: any) {
    this.name = newName;
    this.pLefCol?.updateProfile(this.name);
  }
}
