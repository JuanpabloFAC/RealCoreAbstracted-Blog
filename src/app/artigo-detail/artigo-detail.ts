import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  selector: 'app-artigo-detail',
  imports: [],
  templateUrl: './artigo-detail.html',
  styleUrl: './artigo-detail.scss',
})
export class ArtigoDetail implements OnInit {
  article: Article | null = null;

  private months: MonthGroup[] = [
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
          content: 'Este é um projeto que sempre esteve enraizado em mim, sempre quis ter um blog ou algum tipo de canal de comunicação para compartilhar meus conhecimentos, minhas opiniões e como consequência isso me ajudar e por certo ajudar outras pessoas. Acredito que o ato de escrever é positivo no sentido terapêutico e psicológico. Há também a questão de deixar um "legado" escrito, a escrita se perdurou por muitos anos ao longo de nossa história, então servirá pra isso também, minha pequena contribuição para esse universo. Aqui irei falar sobre tecnologia, tudo em volta de finanças, assuntos acadêmicos/ciêntíficos relacionados a tecnologia e matemática e também você poderá ver opiniões pessoais. 28/04/2026 22:11.'
        },
      ],
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.article = this.findArticleBySlug(slug);
    }
  }

  private findArticleBySlug(slug: string): Article | null {
    for (const monthGroup of this.months) {
      const article = monthGroup.articles.find(a => a.slug === slug);
      if (article) {
        return article;
      }
    }
    return null;
  }
}
