import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAguinaldoComponent } from './component-aguinaldo.component';

describe('ComponentAguinaldoComponent', () => {
  let component: ComponentAguinaldoComponent;
  let fixture: ComponentFixture<ComponentAguinaldoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentAguinaldoComponent]
    });
    fixture = TestBed.createComponent(ComponentAguinaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
