import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageMComponent } from './landing-page-m.component';

describe('LandingPageMComponent', () => {
  let component: LandingPageMComponent;
  let fixture: ComponentFixture<LandingPageMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
