import { Component } from '@angular/core';
import { Artigo } from '../artigo/artigo';

@Component({
  selector: 'app-main',
  imports: [Artigo],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {}
