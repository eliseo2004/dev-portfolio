import { Component, ElementRef, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { ProjectCarouselI } from '../../shared/interfaces/project-carousel.interface';
import { ProjectsCarouselC } from '../../shared/constants/project-carousel.constant';

@Component({
  selector: 'app-projects-carousel',
  imports: [],
  templateUrl: './projects-carousel.html',
  styleUrl: './projects-carousel.scss',
})
export class ProjectsCarousel {
  public projects: ProjectCarouselI[] = ProjectsCarouselC;

}
