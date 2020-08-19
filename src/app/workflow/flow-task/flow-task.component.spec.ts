import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowTaskComponent } from './flow-task.component';

describe('FlowTaskComponent', () => {
  let component: FlowTaskComponent;
  let fixture: ComponentFixture<FlowTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
