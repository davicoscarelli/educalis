import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatematicaMComponent } from './matematica-m.component';

describe('MatematicaMComponent', () => {
  let component: MatematicaMComponent;
  let fixture: ComponentFixture<MatematicaMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatematicaMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatematicaMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
