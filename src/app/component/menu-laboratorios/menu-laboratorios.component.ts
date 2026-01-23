import { Component } from '@angular/core';

type SectionId =
  | 'planificacion'
  | 'cupos'
  | 'laboratorios'
  | 'anterior'
  | 'labs-anterior';

  type MenuItem = {
    label: string;
    href?: string;
    danger?: boolean; 
  };
  
  type MenuSection = {
    id: SectionId;
    title: string;
    desc?: string;
    items: MenuItem[];
  };

@Component({
  selector: 'app-menu-laboratorios',
  templateUrl: './menu-laboratorios.component.html',
  styleUrls: ['./menu-laboratorios.component.css']
})
export class MenuLaboratoriosComponent {

    active: SectionId = 'planificacion';
  
    sections: MenuSection[] = [
      {
        id: 'planificacion',
        title: 'Planificación Académica',
        desc: 'Gestión y control del periodo académico.',
        items: [
          { label: 'Planeación académica', href: '#' },
        ]
      },
      {
        id: 'cupos',
        title: 'Control de Cupos',
        desc: 'administrar registro de inscripciones.',
        items: [
          { label: 'Control de Cupos', href: '#' },
        ]
      },  
      {
        id: 'laboratorios',
        title: 'Recaudaciones de Laboratorios',
        desc: 'Control de la disponibilidad de lboratorios.',
        items: [
          { label: 'Recaudaciones de Laboratorios', href: '#' },
        ]
      },
      {
        id: 'labs-anterior',
        title: 'Matricula de Laboratorios',
        desc: 'Cupos en los laboratorios.',
        items: [
          { label: 'Matricula de Laboratorios', href: '#' },
        ]
      },
      {
        id: 'anterior',
        title: 'Planificación Anterior',
        desc: 'Consulta y mantenimiento de periodos previos.',
        items: [
          { label: 'Ver planificación', href: '#' },
          { label: 'Editar planificación', href: '#' },
        ]
      },
      
    ];
  
    setActive(id: SectionId) {
      this.active = id;
    }
  
    isActive(id: SectionId) {
      return this.active === id;
    }
  
    menuOpen = false;
    openSection: string | null = null;
  
  
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  
    get activeSection(): MenuSection {
      return this.sections.find(s => s.id === this.active) ?? this.sections[0];
    }
  
    toggleSection(id: string) {
      this.openSection = this.openSection === id ? null : id;
    }
  
    isSectionOpen(id: string) {
      return this.openSection === id;
    }
  }
  

