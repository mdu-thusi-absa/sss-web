import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowSetReminderComponent } from './flow-set-reminder.component';

describe('FlowSetReminderComponent', () => {
  let component: FlowSetReminderComponent;
  let fixture: ComponentFixture<FlowSetReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowSetReminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowSetReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
