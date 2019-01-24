import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldForceComponent } from './field-force.component';

describe('FieldForceComponent', () => {
  let component: FieldForceComponent;
  let fixture: ComponentFixture<FieldForceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldForceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldForceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
