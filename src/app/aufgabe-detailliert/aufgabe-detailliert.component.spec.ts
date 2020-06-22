import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AufgabeDetailliertComponent } from './aufgabe-detailliert.component';

describe('AufgabeDetailliertComponent', () => {
  let component: AufgabeDetailliertComponent;
  let fixture: ComponentFixture<AufgabeDetailliertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AufgabeDetailliertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AufgabeDetailliertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
