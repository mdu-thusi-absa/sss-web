import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDetailsDashboardComponent } from './entity-details-dashboard.component';

describe('EntityDetailsDashboardComponent', () => {
  let component: EntityDetailsDashboardComponent;
  let fixture: ComponentFixture<EntityDetailsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityDetailsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityDetailsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
