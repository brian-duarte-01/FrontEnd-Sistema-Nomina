import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTipoPagoComponent } from './component-tipo-pago.component';

describe('ComponentTipoPagoComponent', () => {
  let component: ComponentTipoPagoComponent;
  let fixture: ComponentFixture<ComponentTipoPagoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentTipoPagoComponent]
    });
    fixture = TestBed.createComponent(ComponentTipoPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
