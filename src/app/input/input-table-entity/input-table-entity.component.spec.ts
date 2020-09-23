import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTableEntityComponent } from './input-table-entity.component';

describe('InputTableEntityComponent', () => {
  let component: InputTableEntityComponent;
  let fixture: ComponentFixture<InputTableEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTableEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTableEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
