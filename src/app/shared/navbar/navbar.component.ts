import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


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
}
