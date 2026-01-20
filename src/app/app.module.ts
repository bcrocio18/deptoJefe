import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JefeDeptoComponent } from './jefe-depto/jefe-depto.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProfileCardComponent } from './component/profile-card/profile-card.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuLaboratoriosComponent } from './component/menu-laboratorios/menu-laboratorios.component';
import { MenuPregradoComponent } from './component/menu-pregrado/menu-pregrado.component';
@NgModule({
  declarations: [
    AppComponent,
    JefeDeptoComponent,
    LayoutComponent,
    NavbarComponent, 
    ProfileCardComponent,
    FooterComponent,
    MenuLaboratoriosComponent,
    MenuPregradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
