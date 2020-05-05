import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDetailsCompanyPrimaryComponent } from './entity-details-company-primary.component';

describe('EntityDetailsCompanyPrimaryComponent', () => {
  let component: EntityDetailsCompanyPrimaryComponent;
  let fixture: ComponentFixture<EntityDetailsCompanyPrimaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityDetailsCompanyPrimaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityDetailsCompanyPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
