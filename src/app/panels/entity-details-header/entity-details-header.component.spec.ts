import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDetailsHeaderComponent } from './entity-details-header.component';

describe('EntityDetailsHeaderComponent', () => {
  let component: EntityDetailsHeaderComponent;
  let fixture: ComponentFixture<EntityDetailsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityDetailsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
