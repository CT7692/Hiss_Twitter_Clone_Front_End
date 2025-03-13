import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ChangePicComponent } from '../../components/change-pic/change-pic.component';

@Component({
  selector: 'app-change-pic-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ChangePicComponent],
  templateUrl: './change-pic-page.component.html',
  styleUrl: './change-pic-page.component.css'
})
export class ChangePicPageComponent {

}
