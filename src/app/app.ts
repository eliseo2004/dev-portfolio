import { afterNextRender, Component, inject } from '@angular/core';
import { Header } from './components/header/header';
import { ExperienceSecion } from './components/experience-secion/experience-secion';
import { ServiceAbstractSection } from './components/service-abstract-section/service-abstract-section';
import { Footer } from './components/footer/footer';
import { TechSlideshow } from './components/tech-slideshow/tech-slideshow';
import { ProjectsCarousel } from './components/projects-carousel/projects-carousel';
import { LanguageService } from './shared/services/language.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    ExperienceSecion,
    ServiceAbstractSection,
    Footer,
    TechSlideshow,
    ProjectsCarousel,
    TranslatePipe,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private languageService = inject(LanguageService);

  constructor() {
    this.languageService.init();
  }
}
