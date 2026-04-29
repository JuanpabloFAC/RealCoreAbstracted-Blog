import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hello } from './hello/hello';
import { Footer } from './footer/footer';
import { Main } from './main/main';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hello, Footer, Main, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('modern-angular');
}
