import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JefeDeptoComponent } from './jefe-depto/jefe-depto.component';
import { LayoutComponent } from './layout/layout.component';



const routes: Routes = [
  { path: '', redirectTo: 'jefes', pathMatch: 'full' },
  { path: 'jefes', component: JefeDeptoComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
