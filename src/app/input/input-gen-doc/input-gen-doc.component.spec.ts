import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGenDocComponent } from './input-gen-doc.component';

describe('InputGenDocComponent', () => {
  let component: InputGenDocComponent;
  let fixture: ComponentFixture<InputGenDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputGenDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputGenDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
