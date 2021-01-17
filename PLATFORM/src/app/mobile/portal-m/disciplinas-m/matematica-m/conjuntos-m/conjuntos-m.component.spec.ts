import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjuntosMComponent } from './conjuntos-m.component';

describe('ConjuntosMComponent', () => {
  let component: ConjuntosMComponent;
  let fixture: ComponentFixture<ConjuntosMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConjuntosMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjuntosMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
