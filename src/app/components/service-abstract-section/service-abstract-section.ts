import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-abstract-section',
  imports: [],
  templateUrl: './service-abstract-section.html',
  styleUrl: './service-abstract-section.scss',
})
export class ServiceAbstractSection {
  @Input({ required: true }) title: string = '';
  @Input({ required: false }) description: string = '';
}
