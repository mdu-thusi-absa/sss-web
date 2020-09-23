import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowSelectMultiComponent } from './flow-select-multi.component';

describe('FlowSelectMultiComponent', () => {
  let component: FlowSelectMultiComponent;
  let fixture: ComponentFixture<FlowSelectMultiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowSelectMultiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowSelectMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
