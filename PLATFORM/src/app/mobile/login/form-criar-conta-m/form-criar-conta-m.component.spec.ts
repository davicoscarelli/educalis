import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCriarContaMComponent } from './form-criar-conta-m.component';

describe('FormCriarContaMComponent', () => {
  let component: FormCriarContaMComponent;
  let fixture: ComponentFixture<FormCriarContaMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCriarContaMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCriarContaMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
