import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentIndemizacionComponent } from './component-indemizacion.component';

describe('ComponentIndemizacionComponent', () => {
  let component: ComponentIndemizacionComponent;
  let fixture: ComponentFixture<ComponentIndemizacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentIndemizacionComponent]
    });
    fixture = TestBed.createComponent(ComponentIndemizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
