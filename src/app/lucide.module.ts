import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  User, ChevronDown, Key, LogOut,
  Users, BookOpen, Settings, Sparkles,
  ArrowRight, MapPin, Phone, Mail, Facebook
} from 'lucide-angular';

@NgModule({
  imports: [
    LucideAngularModule.pick({
      User, ChevronDown, Key, LogOut,
      Users, BookOpen, Settings, Sparkles,
      ArrowRight, MapPin, Phone, Mail, Facebook
    })
  ],
  exports: [LucideAngularModule]
})
export class LucideModule {}
