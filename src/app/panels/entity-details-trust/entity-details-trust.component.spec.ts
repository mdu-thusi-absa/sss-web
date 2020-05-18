import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDetailsTrustComponent } from './entity-details-trust.component';

describe('EntityDetailsTrustComponent', () => {
  let component: EntityDetailsTrustComponent;
  let fixture: ComponentFixture<EntityDetailsTrustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityDetailsTrustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityDetailsTrustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
