import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCriarContaComponent } from './form-criar-conta.component';

describe('FormCriarContaComponent', () => {
  let component: FormCriarContaComponent;
  let fixture: ComponentFixture<FormCriarContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCriarContaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCriarContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
