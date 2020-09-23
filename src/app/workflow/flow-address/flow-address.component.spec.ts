import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowAddressComponent } from './flow-address.component';

describe('FlowAddressComponent', () => {
  let component: FlowAddressComponent;
  let fixture: ComponentFixture<FlowAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
