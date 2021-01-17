import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoginMComponent } from './form-login-m.component';

describe('FormLoginMComponent', () => {
  let component: FormLoginMComponent;
  let fixture: ComponentFixture<FormLoginMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLoginMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLoginMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
