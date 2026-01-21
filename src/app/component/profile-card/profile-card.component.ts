import { Component } from '@angular/core';
 
@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {
 
  employeeData = {
    number: '12345',
    name: 'HELLEN ROCIO PINEL BACA',
    center: 'CIUDAD UNIVERSITARIA',
    imageUrl: 'assets/images/perfil.png'
  };
 
  pdfData = {
    title: 'Instructivo Jefes',
    size: '2.40 MB',
    url: '#'
  };
 
  onViewCenso() {
    console.log('Ver censo académico');
  }
 
  onViewCalificaciones() {
    console.log('Ver calificaciones parciales');
  }
}