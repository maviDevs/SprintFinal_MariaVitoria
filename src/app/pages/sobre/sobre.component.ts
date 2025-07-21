import { Component, AfterViewInit } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from "../../components/footer/footer.component";
import { WhatsappComponent } from "../../components/whatsapp/whatsapp.component";

@Component({
  selector: 'app-sobre',
  imports: [NavBarComponent, FooterComponent, WhatsappComponent],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements AfterViewInit {

  ngAfterViewInit(): void {
  setTimeout(() => {
    const video = document.getElementById('bg-video') as HTMLVideoElement;
    if (video) {
      video.muted = true;
      video.play().catch(err => console.log('Erro ao reproduzir vídeo automaticamente:', err));
    }
  }, 100);
}
}
