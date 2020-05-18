import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDetailsIndividualSecondaryComponent } from './entity-details-individual-secondary.component';

describe('EntityDetailsIndividualSecondaryComponent', () => {
  let component: EntityDetailsIndividualSecondaryComponent;
  let fixture: ComponentFixture<EntityDetailsIndividualSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityDetailsIndividualSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityDetailsIndividualSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
