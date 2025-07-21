import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from "../../components/footer/footer.component";
import { CardReceitaComponent } from "../../components/card-receita/card-receita.component";
import { WhatsappComponent } from "../../components/whatsapp/whatsapp.component";



@Component({
  selector: 'app-receitas',
  imports: [NavBarComponent, FooterComponent, CardReceitaComponent, WhatsappComponent],
  templateUrl: './receitas.component.html',
  styleUrl: './receitas.component.css'
})
export class ReceitasComponent {

}