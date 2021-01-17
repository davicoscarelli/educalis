import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudosMComponent } from './conteudos-m.component';

describe('ConteudosMComponent', () => {
  let component: ConteudosMComponent;
  let fixture: ComponentFixture<ConteudosMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConteudosMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudosMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
