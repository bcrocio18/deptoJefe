import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ArrowRight, MapPin, Phone, Mail, Facebook } from 'lucide-angular';

@NgModule({
  imports: [
    CommonModule,
    LucideAngularModule.pick({ ArrowRight, MapPin, Phone, Mail, Facebook })
  ],
  exports: [
    LucideAngularModule
  ]
})
export class LucideModule { }