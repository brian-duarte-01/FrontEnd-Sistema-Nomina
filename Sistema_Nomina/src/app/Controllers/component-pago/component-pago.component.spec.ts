import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPagoComponent } from './component-pago.component';

describe('ComponentPagoComponent', () => {
  let component: ComponentPagoComponent;
  let fixture: ComponentFixture<ComponentPagoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentPagoComponent]
    });
    fixture = TestBed.createComponent(ComponentPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
