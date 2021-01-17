import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletimMComponent } from './boletim-m.component';

describe('BoletimMComponent', () => {
  let component: BoletimMComponent;
  let fixture: ComponentFixture<BoletimMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoletimMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletimMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
