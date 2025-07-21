import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CardmenuComponent } from "../../components/cardmenu/cardmenu.component";
import { WhatsappComponent } from "../../components/whatsapp/whatsapp.component";



@Component({
  selector: 'app-menu',
  imports: [NavBarComponent, FooterComponent, CardmenuComponent, WhatsappComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}