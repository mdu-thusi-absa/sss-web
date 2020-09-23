import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowTextareaComponent } from './flow-textarea.component';

describe('FlowTextareaComponent', () => {
  let component: FlowTextareaComponent;
  let fixture: ComponentFixture<FlowTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
