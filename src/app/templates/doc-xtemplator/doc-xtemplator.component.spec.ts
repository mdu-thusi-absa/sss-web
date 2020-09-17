import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocXTemplatorComponent } from './doc-xtemplator.component';

describe('DocXTemplatorComponent', () => {
  let component: DocXTemplatorComponent;
  let fixture: ComponentFixture<DocXTemplatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocXTemplatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocXTemplatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
