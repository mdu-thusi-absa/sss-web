import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityReportsComponent } from './entity-reports.component';

describe('EntityReportsComponent', () => {
  let component: EntityReportsComponent;
  let fixture: ComponentFixture<EntityReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
