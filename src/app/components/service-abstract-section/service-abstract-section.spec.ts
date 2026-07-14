import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAbstractSection } from './service-abstract-section';

describe('ServiceAbstractSection', () => {
  let component: ServiceAbstractSection;
  let fixture: ComponentFixture<ServiceAbstractSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceAbstractSection],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceAbstractSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
