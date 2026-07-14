import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSlideshow } from './tech-slideshow';

describe('TechSlideshow', () => {
  let component: TechSlideshow;
  let fixture: ComponentFixture<TechSlideshow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechSlideshow],
    }).compileComponents();

    fixture = TestBed.createComponent(TechSlideshow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
