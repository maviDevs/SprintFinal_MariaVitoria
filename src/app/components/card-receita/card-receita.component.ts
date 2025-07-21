import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Receita {
  id: number;
  title: string;
  date: string;
  image: string;
  ingredients: string[];
  preparation: string[];
}


@Component({
  selector: 'app-card-receita',
  imports: [CommonModule],
  templateUrl: './card-receita.component.html',
  styleUrl: './card-receita.component.css'
})
export class CardReceitaComponent {


  recipes: Receita[] = [
    {
      id: 1,
      title: 'Como perarar uma moqueca de Camarão',
      date: 'Abril 3, 2025',
      image: 'imagesmenu/camarao.png',
      ingredients: [
        '500g camarões médios limpos',
        '2 cebolas roxas em rodelas',
        '2 pimentões (vermelho/amarelo) em tiras',
        '3 tomates em rodelas',
        '1 xíc. leite de coco',
        '2 col. (sopa) azeite de dendê',
        'Suco de 1 limão',
        'Coentro e cebolinha a gosto',
        '1 pimenta dedo-de-moça (opcional)',
        '200ml caldo de peixe',
        'Sal e pimenta a gosto'
      ],
      preparation: [
        'Marinar os camarões no suco de limão por 15 min.',
        'Em panela de barro, refogar cebola e alho no azeite.',
        'Acrescentar pimentões e tomates, refogar até murchar.',
        'Adicionar camarões, caldo de peixe e leite de coco.',
        'Cozinhar em fogo médio por 8-10 min (sem ferver o leite de coco).',
        'Finalizar com dendê e ervas frescas.',
        'Servir com arroz de coco e pirão.'
      ]
    },
    {
      id: 1,
      title: 'Como fazer Franco com Pequi',
      date: 'Maio 3, 2023',
      image: 'imagesmenu/frango-pequi.jpg',
      ingredients: [
        '4 coxas sobrecoxas de frango',
        '10 unidades pequi lavado',
        '1 col. (sopa) banha de porco',
        '2 dentes alho amassados',
        '1 cebola picada',
        '1 xíc. guariroba (opcional)',
        '1 pitada açafrão-da-terra',
        'Cheiro-verde a gosto',
        'Sal a gosto'
      ],
      preparation: [
        'Dorar o frango na banha com alho e cebola.',
        'Acrescentar pequi e cobrir com água quente.',
        'Cozinhar em fogo baixo por 40 min.',
        'Adicionar guariroba e açafrão nos últimos 15 min.',
        'Ajustar o sal e finalizar com cheiro-verde.',
        'Servir com arroz branco e angu.'
      ]
    },
    {
      id: 1,
      title: 'Como preparar  Filé Mignon ao Molho de Vinho',
      date: 'janeiro 15, 2025',
      image: 'imagesmenu/Filemignon.jpg',
      ingredients: [
        '2 filés mignon (200g cada)',
        '1 xíc. vinho tinto seco',
        '1 col. (sopa) manteiga',
        '2 chalotas picadas',
        '200g cogumelos Paris fatiados',
        '1 col. (chá) mostarda Dijon',
        '1 ramo tomilho fresco',
        'Sal e pimenta-do-reino a gosto'
      ],
      preparation: [
        'Temperar os filés com sal e pimenta.',
        'Selar em frigideira com manteiga (2 min cada lado). Reservar.',
        'Na mesma panela, refogar chalotas e cogumelos.',
        'Deglasar com vinho, raspando o fundo da panela.',
        'Reduzir o líquido pela metade.',
        'Acrescentar mostarda e tomilho.',
        'Voltar os filés ao molho por 1 minuto.',
        'Descansar por 5 min antes de servir com purê de batata.'
      ]
    },
    {
      id: 1,
      title: 'Como preparar  Tournedos Rossini',
      date: 'janeiro 18, 2025',
      image: 'imagesmenu/tournedos-Rossini.jpg',
      ingredients: [
        '2 filés mignon (150g cada)',
        '2 fatias foie gras fresco (50g cada)',
        '4 fatias pão de forma sem casca',
        '100ml vinho Madeira',
        '200ml demi-glace',
        '1 trufa negra em lâminas',
        'Sal grosso e pimenta rosa a gosto',
        '20g manteiga clarificada'
      ],
      preparation: [
        'Temperar os filés e selar na manteiga por 3 min cada lado.',
        'Assar a 180°C por 5 min (para ponto médio).',
        'Dourar o foie gras rapidamente em frigideira antiaderente.',
        'Tostar o pão em torradeira ou frigideira.',
        'Reduzir o vinho Madeira com demi-glace para fazer o molho.',
        'Montar: pão + filé + foie gras + lâminas de trufa.',
        'Regar com molho e servir com batatas soufflés.'
      ]
    },
    {
      id: 1,
      title: 'Como preparar Soufflé de Queijo Gruyère',
      date: 'janeiro 15, 2025',
      image: 'imagesmenu/queijo.jpg',
      ingredients: [
        '50g manteiga sem sal',
        '50g farinha de trigo',
        '300ml leite integral',
        '100g queijo Gruyère ralado',
        '3 ovos (claras e gemas separadas)',
        '1 pitada noz-moscada',
        'Sal e pimenta branca a gosto',
        'Manteiga e farinha para untar'
      ],
      preparation: [
        'Pré-aquecer forno a 200°C e untar ramequins.',
        'Fazer um roux com manteiga e farinha.',
        'Adicionar leite aos poucos até cremoso.',
        'Retirar do fogo e misturar gemas, queijo e temperos.',
        'Bater as claras em neve firme e incorporar delicadamente.',
        'Assar por 18-20 min sem abrir o forno.',
        'Servir imediatamente com salada de mesclun e vinagrete de framboesa.'
      ]
    },
    {
      id: 1,
      title: 'Como preparar Macarrão à Bolonhesa',
      date: 'janeiro 15, 2025',
      image: 'imagesmenu/macarrao.jpg',
      ingredients: [
        '500g macarrão espaguete',
        '300g carne moída',
        '1 cebola picada',
        '2 dentes alho picados',
        '2 tomates maduros picados',
        '2 col. (sopa) extrato de tomate',
        '1 xíc. caldo de carne',
        '1 col. (chá) orégano',
        'Queijo parmesão ralado a gosto',
        'Sal e pimenta a gosto',
        'Azeite para refogar'
      ],
      preparation: [
        'Cozinhar macarrão al dente em água com sal.',
        'Refogar cebola e alho no azeite até dourarem.',
        'Acrescentar carne moída e fritar até dourar.',
        'Adicionar tomate, extrato e caldo. Cozinhar por 20 min em fogo baixo.',
        'Temperar com orégano, sal e pimenta.',
        'Misturar o molho ao macarrão escorrido.',
        'Servir com parmesão ralado por cima.'
      ]
    },
    // Adicione mais receitas aqui seguindo o mesmo padrão
  ];

  selectedRecipe: Receita | null = null;

  SelecionarReceita(recipe: Receita) {
    this.selectedRecipe = recipe;
  }

  fecharReceita() {
    this.selectedRecipe = null;
  }


}
