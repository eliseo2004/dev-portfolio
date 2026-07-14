import { Component, HostListener, afterNextRender, ChangeDetectorRef, inject } from '@angular/core';
import { NgClass, ViewportScroller } from '@angular/common';
import { About } from '../about/about';
import { LanguageService } from '../../shared/services/language.service';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NgClass, TranslatePipe, About, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private cdr = inject(ChangeDetectorRef);
  private languageService = inject(LanguageService);
  private viewportScroller = inject(ViewportScroller);

  public isWindowScrolled: boolean = false;
  public isMobile: boolean = false;
  public isMenuOpen: boolean = false;
  public themeIcon: string = 'icon-sun';

  public navItems = [
    { label: 'experience', fragment: 'experience' },
    { label: 'projects', fragment: 'projects' },
  ];

  public scrollToHome(event: Event): void {
    event.preventDefault();
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  public changeLanguage(): void {
    this.languageService.toggle();
  }

  public changeTheme(): void {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';

    if (isLight) {
      document.documentElement.removeAttribute('data-theme');
      this.themeIcon = 'icon-sun';
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      this.themeIcon = 'icon-moon';
    }

    localStorage.setItem('theme', isLight ? 'dark' : 'light');
  }

  constructor() {
    afterNextRender(() => {
      this.isMobile = window.innerWidth <= 820;
      this.spyScrollPosition();

      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        this.themeIcon = 'icon-moon';
      }

      this.cdr.detectChanges();
    });
  }

  public openMenu(): void {
    this.isMenuOpen = true;
  }
  public closeMenu(): void {
    this.isMenuOpen = false;
  }

  private spyScrollPosition(): void {
    this.isWindowScrolled = (window.scrollY || window.pageYOffset) > 20;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.spyScrollPosition();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.isMobile = window.innerWidth <= 820;
  }
}
