import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentEmpresaComponent } from './component-empresa.component';

describe('ComponentEmpresaComponent', () => {
  let component: ComponentEmpresaComponent;
  let fixture: ComponentFixture<ComponentEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentEmpresaComponent]
    });
    fixture = TestBed.createComponent(ComponentEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
