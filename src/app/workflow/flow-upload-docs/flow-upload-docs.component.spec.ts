import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowUploadDocsComponent } from './flow-upload-docs.component';

describe('FlowUploadDocsComponent', () => {
  let component: FlowUploadDocsComponent;
  let fixture: ComponentFixture<FlowUploadDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowUploadDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowUploadDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
