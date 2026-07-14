import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

const STORAGE_KEY = 'portfolio_lang';
const SUPPORTED = ['es', 'en'] as const;
export type Language = (typeof SUPPORTED)[number];

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private translate = inject(TranslateService);
  private platformId = inject(PLATFORM_ID);

  init(): void {
    this.translate.addLangs([...SUPPORTED]);
    this.translate.setFallbackLang('es');

    const saved = isPlatformBrowser(this.platformId)
      ? (localStorage.getItem(STORAGE_KEY) as Language | null)
      : null;

    const lang: Language = saved && (SUPPORTED as readonly string[]).includes(saved) ? saved : 'es';

    this.translate.use(lang);
  }

  toggle(): void {
    const current = (this.translate.currentLang() ?? 'es') as Language;
    const next: Language = current === 'es' ? 'en' : 'es';

    this.translate.use(next);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(STORAGE_KEY, next);
    }
  }

  get current(): string {
    return this.translate.currentLang() ?? 'es';
  }
}
