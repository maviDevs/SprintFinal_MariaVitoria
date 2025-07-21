import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface MenuItem {
  nome: string;         
  categoria: string;     
  preco: number;         
  imagem: string;        
  descricao: string;     
}

@Component({
  selector: 'app-cardmenu',
  imports: [CommonModule],
  templateUrl: './cardmenu.component.html',
  styleUrl: './cardmenu.component.css'
})
export class CardmenuComponent {
categoriaSelecionada = 'Todos'; 

  itens: MenuItem[] = [
    // Café da Manhã -------------------------------------------------------------------------
    {
      nome: 'Panquecas Americanas',
      categoria: 'Café da Manhã',
      preco: 19.99,
      imagem: 'imagesmenu/panquecaamericana.jpg',
      descricao: 'Panquecas fofinhas com mel, frutas vermelhas e chantilly. Acompanha xarope de bordo.'
    },
    {
      nome: 'Torrada Francesa Gourmet',
      categoria: 'Café da Manhã',
      preco: 21.99,
      imagem: 'imagesmenu/torrada francessa.jpeg',
      descricao: 'Fatias de brioche com canela, cobertas com frutas da estação e calda de chocolate.'
    },
    {
      nome: 'Omelete da Fazenda',
      categoria: 'Café da Manhã',
      preco: 18.99,
      imagem: 'imagesmenu/omeleteDaFazenda.png',
      descricao: 'Ovos batidos com queijo minas, tomate cereja, espinafre e orégano. Acompanha pão integral e manteiga'
    },
     {
      nome: 'Tropical Açaí Bowl',
      categoria: 'Café da Manhã',
      preco: 22.99,
      imagem: 'imagesmenu/tropicalBowl.png',
      descricao: 'Açaí cremoso com banana, granola caseira, morangos e mel. Opção com leite condensado ou melado de cana.'
    },
     {
      nome: 'Waffles Belga com Frutas',
      categoria: 'Café da Manhã',
      preco: 24.99,
      imagem: 'imagesmenu/wafflesComFrutas.png',
      descricao: 'Waffle crocante com calda de caramelo, morangos, kiwi e chantilly artesanal.'
    }, 
    {
      nome: 'Pão de Queijo Recheado',
      categoria: 'Café da Manhã',
      preco: 12.99,
      imagem: 'imagesmenu/PaoDeQueijo.png',
      descricao: 'Pão de queijo mineiro recheado com requeijão cremoso e presunto magro.'
    }, {
      nome: 'Avocado Toast',
      categoria: 'Café da Manhã',
      preco: 16.99,
      imagem: 'imagesmenu/avocadoToast.png',
      descricao: 'Pão sourdough com abacate amassado, ovos pochê, sementes de chia e pimenta rosa.'
    },
    // Pratos Principais -------------------------------------------------------------------------
    {
      nome: 'Risoto de Cogumelos Trufado',
      categoria: 'Pratos Principais',
      preco: 59.99,
      imagem: 'imagesmenu/Risotocogumelos.jpeg',
      descricao: 'Arroz arbóreo com shimeji, champignon, trufa branca e queijo parmesão.'
    },
    {
      nome: 'Filé Mignon ao Molho de Vinho',
      categoria: 'Pratos Principais',
      preco: 78.99,
      imagem: 'imagesmenu/Filemignon.jpg',
      descricao: 'Corte suculento com molho redução de vinho tinto, purê de batata-salsa e legumes grelhados.'
    },
    {
      nome: 'Bowl de Quinoa e Salmão',
      categoria: 'Pratos Principais',
      preco: 64.99,
      imagem: 'imagesmenu/quinoa-salmao.png',
      descricao: 'Quinoa, salmão marinado em ervas, abacate, pepino e molho de iogurte com limão-siciliano.'
    },
    {
      nome: 'Lasanha de Berinjela ',
      categoria: 'Pratos Principais',
      preco: 49.99,
      imagem: 'imagesmenu/berin-lasanha.jpg',
      descricao: 'amadas de berinjela assada, queijo mussarela de búfala, tomate seco e manjericão fresco.'
    },
    {
      nome: 'Burger Gourmet',
      categoria: 'Pratos Principais',
      preco: 45.99,
      imagem: 'imagesmenu/Burgergourmet.jpg',
      descricao: 'Pão brioche, blend de carne angus, queijo cheddar, bacon crocante e molho barbecue.',
    },
    {
      nome: 'Moqueca de Camarão',
      categoria: 'Pratos Principais',
      preco: 89.99,
      imagem: 'imagesmenu/camarao.png',
      descricao: 'Camarões frescos no leite de coco, dendê, pimentões e coentro. Acompanha arroz de coco e pirão.'
    },
    {
      nome: 'Feijoada Completa',
      categoria: 'Pratos Principais',
      preco: 69.99,
      imagem: 'imagesmenu/feijao.jpeg',
      descricao: 'Feijão preto com costelinha, linguiça calabresa, carne seca e couve refogada. Acompanha farofa, arroz, laranja e torresmo'
    },
    {
      nome: 'Frango com Pequi ',
      categoria: 'Pratos Principais',
      preco: 64.99,
      imagem: 'imagesmenu/frango-pequi.jpg',
      descricao: 'Coxas de frango ensopadas com pequi, arroz e guariroba.'
    },
    {
      nome: 'Baião de Dois Nordestino',
      categoria: 'Pratos Principais',
      preco: 54.99,
      imagem: 'imagesmenu/baiaode-dois.jpeg',
      descricao: 'Arroz com feijão-verde, queijo coalho, carne de sol e nata. Finalizado com coentro e cebola roxa.'
    },
  
    {
      nome: 'Picadinho à Brasileira ',
      categoria: 'Pratos Principais',
      preco: 79.99,
      imagem: 'imagesmenu/pacadinhocarne.webp',
      descricao: 'Cubos de carne macia refogados com batata, ovos, azeitonas e molho de vinho. Acompanha banana-da-terra frita.'
    },



// Bebidas -------------------------------------------------------------------------
    {
      nome: 'Limonada Rosa',
      categoria: 'Bebidas',
      preco: 12.90,
      imagem: 'imagesmenu/Limonada-rosa.jpeg',
      descricao: 'Limão, água com gás, xarope de groselha e folhas de hortelã.'
    },
    {
      nome: 'Café Gelado com Baunilha',
      categoria: 'Bebidas',
      preco: 18.90,
      imagem: 'imagesmenu/cha-gelado.jpeg',
      descricao: 'Espresso resfriado, leite vegetal, xarope de baunilha e gelo de café.'
    },
    {
      nome: 'Smoothie Verde',
      categoria: 'Bebidas',
      preco: 12.90,
      imagem: 'imagesmenu/vitamina-verde.jpeg',
      descricao: 'Abacaxi, couve, gengibre, água de coco e chia.'
    },
    {
      nome: 'Caipirinha de Maracujá ',
      categoria: 'Bebidas',
      preco: 22.90,
      imagem: 'imagesmenu/caipirinha-maracuja.jpg',
      descricao: 'Cachaça artesanal, maracujá fresco, açúcar mascavo e gelo.'
    },
    {
      nome: 'Chá Gelado de Pêssego',
      categoria: 'Bebidas',
      preco: 10.90,
      imagem: 'imagesmenu/cha-gelado.jpeg',
      descricao: 'Chá preto orgânico, pêssego fresco e raspas de canela.'
    },
    {
      nome: 'Aperol Spritz',
      categoria: 'Bebidas',
      preco: 30.90,
      imagem: 'imagesmenu/Aperolspritz.jpg',
      descricao: 'Aperol, prosecco, água com gás e laranja sanguínea.'
    },
    {
      nome: 'Agua',
      categoria: 'Bebidas',
      preco: 5.90,
      imagem: 'imagesmenu/agua1.png',
      descricao: 'Agua mineral com gás ou sem gás.'
    },
    {
      nome: 'Coca-Cola',
      categoria: 'Bebidas',
      preco: 10.90,
      imagem: 'imagesmenu/coca.jpeg',
      descricao: 'Refrigerante clássico, servido gelado.'
    },
    {
      nome: 'Suco Natural de Laranja',
      categoria: 'Bebidas',
      preco: 14.90,
      imagem: 'imagesmenu/suco-laranja.jpg',
      descricao: 'Suco fresco de laranja, espremido na hora.'
    },



    // Sobremesas -------------------------------------------------------------------------
    {
      nome: 'Bolo de Caramelo',
      categoria: 'Sobremesas',
      preco: 20.99,
      imagem: 'imagesmenu/caramelo.jpg',
      descricao: 'Base de biscoito amanteigado, cream cheese e calda de frutas frescas.'
    },
    {
      nome: 'Petit Gateau ',
      categoria: 'Sobremesas',
      preco: 34.99,
      imagem: 'imagesmenu/peti.jpeg',
      descricao: 'Bolo de chocolate derretido com sorvete de baunilha e raspas de laranja'
    },
    {
      nome: 'Pavlova de Manga ',
      categoria: 'Sobremesas',
      preco: 29.99,
      imagem: 'imagesmenu/manga-pavlova.jpeg',
      descricao: 'Merengue crocante, chantilly, manga caramelizada e folhas de hortelã.Camadas de biscoito champanhe, café, mascarpone e cacau em pó'
    },
    {
      nome: 'Tiramisù Clássico ',
      categoria: 'Sobremesas',
      preco: 32.99,
      imagem: 'imagesmenu/Tiramisu.jpeg',
      descricao: 'Base de biscoito amanteigado, cream cheese e calda de frutas frescas.'
    },
    {
      nome: 'Donuts Recheados',
      categoria: 'Sobremesas',
      preco: 18.99,
      imagem: 'imagesmenu/Donuts.jpeg',
      descricao: 'Donuts fofos com recheio de nutella, doce de leite ou geleia de morango.'
    },
    {
      nome: 'sorvete ',
      categoria: 'Sobremesas',
      preco: 20.99,
      imagem: 'imagesmenu/sorvete.jpg',
      descricao: 'Sorvete cremoso de ameixa com pedaços de frutas e calda de chocolate.'
    },
    
    


  ];


  // Inicializa a lista de itens filtrados com todos os itens---------------------------------------------------------------------

  itensFiltrados = this.itens;

  filtrarCategoria(categoria: string) {
    this.categoriaSelecionada = categoria;
    if (categoria === 'Todos') {
      this.itensFiltrados = this.itens;
    } else {
      this.itensFiltrados = this.itens.filter(item => item.categoria === categoria);
    }
  }
}
