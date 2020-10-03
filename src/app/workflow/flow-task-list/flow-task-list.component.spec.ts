import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowTaskListComponent } from './flow-task-list.component';

describe('FlowTaskListComponent', () => {
  let component: FlowTaskListComponent;
  let fixture: ComponentFixture<FlowTaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowTaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
