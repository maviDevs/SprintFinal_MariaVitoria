import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { DivmenuComponent } from '../../components/divmenu/divmenu.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { WhatsappComponent } from "../../components/whatsapp/whatsapp.component";


@Component({
  selector: 'app-home',
  imports: [NavBarComponent, CarouselComponent, DivmenuComponent, FooterComponent, WhatsappComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
