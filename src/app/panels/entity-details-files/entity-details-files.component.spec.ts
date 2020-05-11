import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDetailsFilesComponent } from './entity-details-files.component';

describe('EntityDetailsFilesComponent', () => {
  let component: EntityDetailsFilesComponent;
  let fixture: ComponentFixture<EntityDetailsFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityDetailsFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityDetailsFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
