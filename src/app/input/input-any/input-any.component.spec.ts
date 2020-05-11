import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAnyComponent } from './input-any.component';

describe('InputAnyComponent', () => {
  let component: InputAnyComponent;
  let fixture: ComponentFixture<InputAnyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputAnyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
