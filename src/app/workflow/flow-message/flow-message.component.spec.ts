import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowMessageComponent } from './flow-message.component';

describe('FlowMessageComponent', () => {
  let component: FlowMessageComponent;
  let fixture: ComponentFixture<FlowMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
