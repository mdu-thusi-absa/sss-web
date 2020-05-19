import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDetailsSecretaryComponent } from './entity-details-secretary.component';

describe('EntityDetailsSecretaryComponent', () => {
  let component: EntityDetailsSecretaryComponent;
  let fixture: ComponentFixture<EntityDetailsSecretaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityDetailsSecretaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityDetailsSecretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
