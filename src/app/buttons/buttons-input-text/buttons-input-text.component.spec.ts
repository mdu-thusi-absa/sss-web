import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsInputTextComponent } from './buttons-input-text.component';

describe('ButtonsInputTextComponent', () => {
  let component: ButtonsInputTextComponent;
  let fixture: ComponentFixture<ButtonsInputTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsInputTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
