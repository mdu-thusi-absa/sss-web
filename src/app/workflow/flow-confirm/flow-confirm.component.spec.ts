import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowConfirmComponent } from './flow-confirm.component';

describe('FlowConfirmComponent', () => {
  let component: FlowConfirmComponent;
  let fixture: ComponentFixture<FlowConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
