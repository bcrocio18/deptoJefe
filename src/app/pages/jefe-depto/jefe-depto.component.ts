import { Component } from '@angular/core';

type MenuKey = 'matricula' | 'laboratorios';

@Component({
  selector: 'app-jefe-depto',
  templateUrl: './jefe-depto.component.html',
  styleUrls: ['./jefe-depto.component.css']
})
export class JefeDeptoComponent {
  openDrop: string | null = null;

  open(key: string){ this.openDrop = key; }
  close(key: string){ if(this.openDrop === key) this.openDrop = null; }
  isOpen(key: string){ return this.openDrop === key; }

  openOnly(target: HTMLDetailsElement, ev: MouseEvent) {
  ev.preventDefault(); // evita el toggle nativo del <details>

  const wasOpen = target.open;

  // cerrar todos
  document.querySelectorAll<HTMLDetailsElement>('details.nav-acc')
    .forEach(d => d.open = false);

  // si no estaba abierto, abrilo; si ya estaba, queda cerrado
  target.open = !wasOpen;
}

}
