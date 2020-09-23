import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSelectListComponent } from './input-select-list.component';

describe('InputSelectListComponent', () => {
  let component: InputSelectListComponent;
  let fixture: ComponentFixture<InputSelectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSelectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
