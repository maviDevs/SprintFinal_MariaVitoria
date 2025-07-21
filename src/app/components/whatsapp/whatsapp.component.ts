import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  imports: [CommonModule],
  templateUrl: './whatsapp.component.html',
  styleUrl: './whatsapp.component.css'
})
export class WhatsappComponent {

   abrirWhatsapp() {
    const numero = '5599999999999'; // Substitua pelo seu número
    const mensagem = 'Olá, quero mais informações sobre seus serviços';
    const url = `https://wa.me/${71986041020}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  }
}
