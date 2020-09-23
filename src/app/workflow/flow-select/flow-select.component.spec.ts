import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowSelectComponent } from './flow-select.component';

describe('FlowSelectComponent', () => {
  let component: FlowSelectComponent;
  let fixture: ComponentFixture<FlowSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
