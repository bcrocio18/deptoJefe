import { Component } from '@angular/core';

@Component({
  selector: 'app-jefe-depto',
  templateUrl: './jefe-depto.component.html',
  styleUrls: ['./jefe-depto.component.css']
})
export class JefeDeptoComponent {
    employeeData = {
      number: '12345',
      name: 'HELLEN ROCIO PINEL BACA',
      center: 'CIUDAD UNIVERSITARIA',
      imageUrl: 'assets/images/perfil.png'
    };
    

    pdfData = {
      title: 'Instructivo Jefes',
      size: '2.40 MB',
      url: '/assets/docs/instructivo.pdf'
    };

    viewCenso() {
      console.log('Abrir censo académico');
    }

    abrirCalificaciones() {
      console.log('Abrir calificaciones');
    }

}
