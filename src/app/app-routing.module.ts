import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JefeDeptoComponent } from './pages/jefe-depto/jefe-depto.component';

const routes: Routes = [
  { path: '', redirectTo: 'jefes', pathMatch: 'full' },
  { path: 'jefes', component: JefeDeptoComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
