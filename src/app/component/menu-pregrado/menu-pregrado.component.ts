import { Component } from '@angular/core';

type SectionId =
  | 'planificacion'
  | 'cancelacion'
  | 'estudiante'
  | 'matricula'
  | 'calificaciones'
  | 'anterior';

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
  danger?: boolean; 
};

@Component({
  selector: 'app-menu-pregrado',
  templateUrl: './menu-pregrado.component.html',
  styleUrls: ['./menu-pregrado.component.css']
})
export class MenuPregradoComponent {
  active: SectionId = 'planificacion';

  sections: MenuSection[] = [
    {
      id: 'planificacion',
      title: 'Planificación Académica',
      desc: 'Gestión y control del periodo académico.',
      items: [
        { label: 'Planeación académica', href: '#' },
        { label: 'Control de cupos', href: '#' },
        { label: 'Aulas asignadas', href: '#' },
        { label: 'Estado de matrícula', href: '#' },
        { label: 'Coordinadores asignatura', href: '#' },
        { label: 'Reprobación masiva', href: '#' },
      ]
    },
    {
      id: 'cancelacion',
      title: 'Inscripción y Cancelación',
      desc: 'Gestión y control del registro de inscripciones y cancelaciones.',
      items: [
        { label: 'Inscripción y Cancelación', href: '#' },
      ]
    },
    {
      id: 'estudiante',
      title: 'Información de Estudiante',
      desc: 'Gestión y control del estudiante.',
      items: [
        { label: 'Información de Estudiante', href: '#' },
      ]
    },
    {
      id: 'calificaciones',
      title: 'Registro de Calificaciones',
      desc: 'Acciones relacionadas a notas y evaluación.',
      items: [
        { label: 'Reiniciar clave de profesor', href: '#' },
        { label: 'Ver estudiantes matriculados', href: '#' },
        { label: 'Ver calificaciones ingresadas', href: '#' },
        { label: 'Evaluación Docente', href: '#' },
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
    {
      id: 'matricula',
      title: 'Baja Matrícula',
      desc: 'Registro de la baja de matrícula.',
      danger: true, 
      items: [
        { label: 'Baja Matrícula', href: '#', danger: true }, // ✅ item peligroso también
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
