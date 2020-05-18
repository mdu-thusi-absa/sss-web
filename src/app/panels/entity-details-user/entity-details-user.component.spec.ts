import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDetailsUserComponent } from './entity-details-user.component';

describe('EntityDetailsUserComponent', () => {
  let component: EntityDetailsUserComponent;
  let fixture: ComponentFixture<EntityDetailsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityDetailsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityDetailsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
