import { Component } from '@angular/core';

type MainKey =
  | 'planificacion'
  | 'calificaciones'
  | 'anterior'
  | 'labs-anterior';

@Component({
  selector: 'app-menu-laboratorios',
  templateUrl: './menu-laboratorios.component.html',
  styleUrls: ['./menu-laboratorios.component.css']
})
export class MenuLaboratoriosComponent {

  /* ===== NAVBAR (NO SE TOCA) ===== */
  openDrop: string | null = null;

  open(key: string){ this.openDrop = key; }
  close(key: string){ if(this.openDrop === key) this.openDrop = null; }
  isOpen(key: string){ return this.openDrop === key; }

  openOnly(target: HTMLDetailsElement, ev: MouseEvent) {
    ev.preventDefault();

    const wasOpen = target.open;

    document
      .querySelectorAll<HTMLDetailsElement>('details.nav-acc')
      .forEach(d => d.open = false);

    target.open = !wasOpen;
  }

  /* ===== MAIN (ACORDEÓN LIMPIO) ===== */
  openMain: MainKey | null = null;

  toggleMain(key: MainKey) {
    this.openMain = this.openMain === key ? null : key;
  }

  isMainOpen(key: MainKey): boolean {
    return this.openMain === key;
  }
}

