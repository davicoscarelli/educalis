import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEsqueceuSenhaMComponent } from './form-esqueceu-senha-m.component';

describe('FormEsqueceuSenhaMComponent', () => {
  let component: FormEsqueceuSenhaMComponent;
  let fixture: ComponentFixture<FormEsqueceuSenhaMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEsqueceuSenhaMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEsqueceuSenhaMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
