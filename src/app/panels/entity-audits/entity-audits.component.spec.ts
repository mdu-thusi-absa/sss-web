import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityAuditsComponent } from './entity-audits.component';

describe('EntityAuditsComponent', () => {
  let component: EntityAuditsComponent;
  let fixture: ComponentFixture<EntityAuditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityAuditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityAuditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
