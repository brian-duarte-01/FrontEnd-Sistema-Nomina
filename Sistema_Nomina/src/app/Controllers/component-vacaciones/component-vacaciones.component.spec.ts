import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentVacacionesComponent } from './component-vacaciones.component';

describe('ComponentVacacionesComponent', () => {
  let component: ComponentVacacionesComponent;
  let fixture: ComponentFixture<ComponentVacacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentVacacionesComponent]
    });
    fixture = TestBed.createComponent(ComponentVacacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
