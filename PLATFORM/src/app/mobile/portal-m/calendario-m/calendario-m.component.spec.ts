import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioMComponent } from './calendario-m.component';

describe('CalendarioMComponent', () => {
  let component: CalendarioMComponent;
  let fixture: ComponentFixture<CalendarioMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
