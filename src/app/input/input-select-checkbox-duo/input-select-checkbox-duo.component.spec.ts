import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSelectCheckboxDuoComponent } from './input-select-checkbox-duo.component';

describe('InputSelectCheckboxDuoComponent', () => {
  let component: InputSelectCheckboxDuoComponent;
  let fixture: ComponentFixture<InputSelectCheckboxDuoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSelectCheckboxDuoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSelectCheckboxDuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
