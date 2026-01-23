import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {

  @Input() title = 'Datos del Jefe de Departamento';

  @Input() employeeData!: {
    number: string;
    name: string;
    center: string;
    imageUrl: string;
  };

  @Input() pdfData!: {
    title: string;
    size: string;
    url: string;
  };

  @Output() viewCenso = new EventEmitter<void>();
  @Output() viewCalificaciones = new EventEmitter<void>();


  profileOpen = true; // true = se mira abierto al inicio

  toggleProfile() {
    this.profileOpen = !this.profileOpen;
  }

  onViewCenso() {
    this.viewCenso.emit();
  }

  onViewCalificaciones() {
    this.viewCalificaciones.emit();
  }
}
