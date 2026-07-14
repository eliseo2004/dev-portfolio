import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceSecion } from './experience-secion';

describe('ExperienceSecion', () => {
  let component: ExperienceSecion;
  let fixture: ComponentFixture<ExperienceSecion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceSecion],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceSecion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
