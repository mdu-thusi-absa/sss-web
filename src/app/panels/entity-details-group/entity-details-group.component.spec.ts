import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDetailsGroupComponent } from './entity-details-group.component';

describe('EntityDetailsGroupComponent', () => {
  let component: EntityDetailsGroupComponent;
  let fixture: ComponentFixture<EntityDetailsGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityDetailsGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityDetailsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
