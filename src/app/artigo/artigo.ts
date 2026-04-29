import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface Article {
  title: string;
  url: string;
  slug: string;
  content: string;
}

export interface MonthGroup {
  year: number;
  month: string;
  articles: Article[];
}

@Component({
  selector: 'app-artigo',
  imports: [RouterLink],
  templateUrl: './artigo.html',
  styleUrl: './artigo.scss',
})
export class Artigo {
  months: MonthGroup[] = [
    {
      year: 2026,
      month: 'Maio',
      articles: [
        {
          title: '...',
          url: '#maio',
          slug: 'maio',
          content: 'Conteúdo do artigo de maio ainda não adicionado.',
        },
      ],
    },
    {
      year: 2026,
      month: 'Abril',
      articles: [
        {
          title: 'O início de tudo',
          url: '#primeiro',
          slug: 'primeiro',
          content: 'Aqui vai o conteúdo do artigo "O início de tudo".',
        },
      ],
    }
  ];
}
