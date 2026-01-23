import { Component, ElementRef, HostListener } from '@angular/core';

type MenuItem = {
  label: string;
  desc: string;
  href?: string;
  active?: boolean;
};

type Dropdown = {
  key: string;
  label: string;
  accentClass: 'accent-pre' | 'accent-pos' | 'accent-admin';
  title: string;
  items: MenuItem[];
};

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isMobileOpen = false;
  openKey: string | null = null;

  dropdowns: Dropdown[] = [
    {
      key: 'pregrado',
      label: 'Sistema de Pregrado',
      accentClass: 'accent-pre',
      title: 'SISTEMA DE PREGRADO',
      items: [
        { label: 'Estudiantes', desc: 'Gestión de estudiantes', href: '#', active: false },
        { label: 'Profesores', desc: 'Gestión de profesores', href: '#', active: false },
        { label: 'Jefes de departamento', desc: 'Área activa', href: '#', active: true },
        { label: 'Coordinadores', desc: 'Coordinadores de carrera', href: '#', active: false },
      ],
    },
    {
      key: 'posgrado',
      label: 'Sistema de Posgrado',
      accentClass: 'accent-pos',
      title: 'SISTEMA DE POSGRADO',
      items: [
        { label: 'Solicitudes de ingreso', desc: 'Admisión y seguimiento', href: '#', active: false },
        { label: 'Oferta académica', desc: 'Programas y cohortes', href: '#', active: false },
        { label: 'Servicio al estudiante', desc: 'Soporte y trámites', href: '#', active: false },
        { label: 'Coordinación', desc: 'Gestión de postgrados', href: '#', active: false },
      ],
    },
    {
      key: 'admin',
      label: 'Administración',
      accentClass: 'accent-admin',
      title: 'ADMINISTRACIÓN',
      items: [
        { label: 'Dirección académica', desc: 'Gestión académica', href: '#', active: false },
        { label: 'Comisionado', desc: 'Gestión de roles', href: '#', active: false },
        { label: 'Tesorería', desc: 'Pagos y finanzas', href: '#', active: false },
        { label: 'Decanos', desc: 'Estructura y control', href: '#', active: false },
      ],
    },
  ];

  constructor(private host: ElementRef<HTMLElement>) {}

  toggleMobile(): void {
    this.isMobileOpen = !this.isMobileOpen;
    if (!this.isMobileOpen) this.openKey = null;
  }

  toggleDropdown(key: string, ev?: Event): void {
    ev?.preventDefault();
    ev?.stopPropagation();
    this.openKey = this.openKey === key ? null : key;
  }

  setActive(dropKey: string, label: string): void {
    const dd = this.dropdowns.find(d => d.key === dropKey);
    if (!dd) return;
    dd.items.forEach(i => (i.active = i.label === label));
    // opcional: si querés que se cierre al seleccionar
    // this.openKey = null;
    // this.isMobileOpen = false;
  }

  // Cierra dropdowns al hacer click fuera
  @HostListener('document:click', ['$event'])
  onDocClick(ev: MouseEvent): void {
    const target = ev.target as HTMLElement | null;
    if (!target) return;

    // si el click fue dentro del navbar, no cierres
    if (this.host.nativeElement.contains(target)) return;

    this.openKey = null;
    // en móvil podés decidir si cerrar el panel también
    // this.isMobileOpen = false;
  }

  trackByKey(_: number, d: Dropdown): string {
    return d.key;
  }
}
