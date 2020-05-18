import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDetailsIndividualComponent } from './entity-details-individual.component';

describe('EntityDetailsIndividualComponent', () => {
  let component: EntityDetailsIndividualComponent;
  let fixture: ComponentFixture<EntityDetailsIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityDetailsIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityDetailsIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
