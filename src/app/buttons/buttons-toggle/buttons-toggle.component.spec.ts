import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsToggleComponent } from './buttons-toggle.component';

describe('ButtonsToggleComponent', () => {
  let component: ButtonsToggleComponent;
  let fixture: ComponentFixture<ButtonsToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
