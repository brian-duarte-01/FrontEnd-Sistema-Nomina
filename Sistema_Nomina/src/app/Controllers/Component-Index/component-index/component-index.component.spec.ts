import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentIndexComponent } from './component-index.component';

describe('ComponentIndexComponent', () => {
  let component: ComponentIndexComponent;
  let fixture: ComponentFixture<ComponentIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentIndexComponent]
    });
    fixture = TestBed.createComponent(ComponentIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
