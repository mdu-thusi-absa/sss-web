import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityMessageComponent } from './entity-message.component';

describe('EntityMessageComponent', () => {
  let component: EntityMessageComponent;
  let fixture: ComponentFixture<EntityMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
