import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentEstadoComponent } from './component-estado.component';

describe('ComponentEstadoComponent', () => {
  let component: ComponentEstadoComponent;
  let fixture: ComponentFixture<ComponentEstadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentEstadoComponent]
    });
    fixture = TestBed.createComponent(ComponentEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
