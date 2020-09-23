import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowSubmitDocsComponent } from './flow-submit-docs.component';

describe('FlowSubmitDocsComponent', () => {
  let component: FlowSubmitDocsComponent;
  let fixture: ComponentFixture<FlowSubmitDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowSubmitDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowSubmitDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
