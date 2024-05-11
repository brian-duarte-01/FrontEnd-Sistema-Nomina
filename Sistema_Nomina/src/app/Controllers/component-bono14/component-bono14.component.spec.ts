import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBono14Component } from './component-bono14.component';

describe('ComponentBono14Component', () => {
  let component: ComponentBono14Component;
  let fixture: ComponentFixture<ComponentBono14Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentBono14Component]
    });
    fixture = TestBed.createComponent(ComponentBono14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
