import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityTaskComponent } from './entity-task.component';

describe('EntityTaskComponent', () => {
  let component: EntityTaskComponent;
  let fixture: ComponentFixture<EntityTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
