import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalMComponent } from './portal-m.component';

describe('PortalMComponent', () => {
  let component: PortalMComponent;
  let fixture: ComponentFixture<PortalMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
