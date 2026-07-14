import { afterNextRender, Component } from '@angular/core';
import { TechSlideShowI } from '../../shared/interfaces/slideshow-item-interfaces';
import { TECH_SLIDESHOW } from '../../shared/constants/slideshow.constant';

@Component({
  selector: 'app-tech-slideshow',
  imports: [],
  templateUrl: './tech-slideshow.html',
  styleUrl: './tech-slideshow.scss',
})
export class TechSlideshow {
  public techs: TechSlideShowI[] = TECH_SLIDESHOW;
  public isViewReady: boolean = false;

  constructor() {
    afterNextRender((): void => {
      this.isViewReady = true;
    });
  }
}
