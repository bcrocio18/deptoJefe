import { Component, HostListener } from '@angular/core';
 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMobileMenuOpen = false;
  private openDropdown: string | null = null;
 
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) this.openDropdown = null;
  }
 
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.openDropdown = null;
  }
 
  toggleDropdown(key: string, event: Event) {
    event.preventDefault();
    event.stopPropagation();
 
    this.openDropdown = (this.openDropdown === key) ? null : key;
  }
 
  isDropdownOpen(key: string): boolean {
    return this.openDropdown === key;
  }
 
  closeAllDropdowns() {
    this.openDropdown = null;
  }
 
  // Cierra dropdowns al hacer click fuera (desktop y mobile)
  @HostListener('document:click')
  onDocClick() {
    if (!this.isMobileMenuOpen) this.openDropdown = null;
  }
}