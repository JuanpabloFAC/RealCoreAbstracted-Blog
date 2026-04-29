import { Routes } from '@angular/router';
import { Main } from './main/main';
import { ArtigoDetail } from './artigo-detail/artigo-detail';

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'artigo/:slug', component: ArtigoDetail },
  { path: '**', redirectTo: '' }
];
