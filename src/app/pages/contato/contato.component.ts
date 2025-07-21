import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { FormsModule } from '@angular/forms';
import { WhatsappComponent } from "../../components/whatsapp/whatsapp.component";

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, NavBarComponent, FooterComponent, FormsModule, WhatsappComponent],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  nome = '';
  email = '';
  numero = '';
  mensagem = '';
  aceito = false;

  mensagemFinal = '';
  corMensagem = '';

  enviarFormulario() {
    if (!this.aceito) {
      this.mensagemFinal = 'Você precisa aceitar os termos de uso.';
      this.corMensagem = 'red';
      return;
    }

    this.mensagemFinal = 'Formulário enviado com sucesso!';
    this.corMensagem = 'green';

    // Limpar campos
    this.nome = '';
    this.email = '';
    this.numero = '';
    this.mensagem = '';
    this.aceito = false;
  }
}
