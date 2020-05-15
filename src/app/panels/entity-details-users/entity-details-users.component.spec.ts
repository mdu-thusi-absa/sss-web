import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDetailsUsersComponent } from './entity-details-users.component';

describe('EntityDetailsUsersComponent', () => {
  let component: EntityDetailsUsersComponent;
  let fixture: ComponentFixture<EntityDetailsUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityDetailsUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityDetailsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
