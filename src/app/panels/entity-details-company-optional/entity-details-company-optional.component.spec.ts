import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDetailsCompanyOptionalComponent } from './entity-details-company-optional.component';

describe('EntityDetailsCompanyOptionalComponent', () => {
  let component: EntityDetailsCompanyOptionalComponent;
  let fixture: ComponentFixture<EntityDetailsCompanyOptionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityDetailsCompanyOptionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityDetailsCompanyOptionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
