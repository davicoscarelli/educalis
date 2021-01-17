import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioCompletoComponent } from './calendario-completo.component';

describe('CalendarioCompletoComponent', () => {
  let component: CalendarioCompletoComponent;
  let fixture: ComponentFixture<CalendarioCompletoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioCompletoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
