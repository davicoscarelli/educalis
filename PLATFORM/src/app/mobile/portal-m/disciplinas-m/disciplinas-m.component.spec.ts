import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinasMComponent } from './disciplinas-m.component';

describe('DisciplinasMComponent', () => {
  let component: DisciplinasMComponent;
  let fixture: ComponentFixture<DisciplinasMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisciplinasMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinasMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
