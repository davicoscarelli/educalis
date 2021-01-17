import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessoresMComponent } from './professores-m.component';

describe('ProfessoresMComponent', () => {
  let component: ProfessoresMComponent;
  let fixture: ComponentFixture<ProfessoresMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessoresMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessoresMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
