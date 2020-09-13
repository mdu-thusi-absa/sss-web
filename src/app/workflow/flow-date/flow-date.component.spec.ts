import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowDateComponent } from './flow-date.component';

describe('FlowDateComponent', () => {
  let component: FlowDateComponent;
  let fixture: ComponentFixture<FlowDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
