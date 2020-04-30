import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDuoComponent } from './input-duo.component';

describe('InputDuoComponent', () => {
  let component: InputDuoComponent;
  let fixture: ComponentFixture<InputDuoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDuoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
