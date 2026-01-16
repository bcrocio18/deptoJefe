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
}
