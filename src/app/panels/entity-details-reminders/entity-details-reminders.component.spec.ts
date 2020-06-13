import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDetailsRemindersComponent } from './entity-details-reminders.component';

describe('EntityDetailsRemindersComponent', () => {
  let component: EntityDetailsRemindersComponent;
  let fixture: ComponentFixture<EntityDetailsRemindersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityDetailsRemindersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityDetailsRemindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
