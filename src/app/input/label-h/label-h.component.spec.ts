import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelHComponent } from './label-h.component';

describe('LabelHComponent', () => {
  let component: LabelHComponent;
  let fixture: ComponentFixture<LabelHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
