import { Component } from '@angular/core';


type MainKey =
  | 'planificacion'
  | 'calificaciones'
  | 'anterior'
  | 'labs-anterior';

@Component({
  selector: 'app-menu-pregrado',
  templateUrl: './menu-pregrado.component.html',
  styleUrls: ['./menu-pregrado.component.css']
})
export class MenuPregradoComponent {

  openMain: MainKey | null = null;

  toggleMain(key: MainKey) {
    this.openMain = this.openMain === key ? null : key;
  }

  isMainOpen(key: MainKey): boolean {
    return this.openMain === key;
  }
}
