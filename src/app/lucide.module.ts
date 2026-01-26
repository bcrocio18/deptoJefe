import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  User, ChevronDown, Key, LogOut,
  Users, BookOpen, Settings, Sparkles,
  FilePlus, Layers, LifeBuoy, UserCog,
  GraduationCap, ShieldCheck, Wallet, Building2,
  ArrowRight, MapPin, Phone, Mail, Facebook
} from 'lucide-angular';


@NgModule({
  imports: [
    LucideAngularModule.pick({
  User, ChevronDown, Key, LogOut,
  Users, BookOpen, Settings, Sparkles,
  FilePlus, Layers, LifeBuoy, UserCog,
  GraduationCap, ShieldCheck, Wallet, Building2,
  ArrowRight, MapPin, Phone, Mail, Facebook
})

  ],
  exports: [LucideAngularModule]
})
export class LucideModule {}
