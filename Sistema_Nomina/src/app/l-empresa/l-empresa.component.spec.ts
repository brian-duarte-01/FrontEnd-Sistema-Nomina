import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LEmpresaComponent } from './l-empresa.component';

describe('LEmpresaComponent', () => {
  let component: LEmpresaComponent;
  let fixture: ComponentFixture<LEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LEmpresaComponent]
    });
    fixture = TestBed.createComponent(LEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
