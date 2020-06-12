import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDetailsMeetingsComponent } from './entity-details-meetings.component';

describe('EntityDetailsMeetingsComponent', () => {
  let component: EntityDetailsMeetingsComponent;
  let fixture: ComponentFixture<EntityDetailsMeetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityDetailsMeetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityDetailsMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
