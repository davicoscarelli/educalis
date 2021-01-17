import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessoresMatematicaComponent } from './professores-matematica.component';

describe('ProfessoresMatematicaComponent', () => {
  let component: ProfessoresMatematicaComponent;
  let fixture: ComponentFixture<ProfessoresMatematicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessoresMatematicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessoresMatematicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
