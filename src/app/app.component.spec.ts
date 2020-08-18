import { AppComponent } from "./app.component";

describe('App Component',() => {
  let component: AppComponent;
  beforeEach(()=>{
    component = new AppComponent();
  })
  it('should 1+1', ()=>{
    expect(1 + 1).toEqual(2);
  })

  //dependancies
  it('should have a all dependancies', () => {
    expect(component).toBeTruthy();
  })

  it('title', ()=>{
    expect(component.title).toEqual('sss');
  })
});

// import { TestBed, async } from '@angular/core/testing';
// import { AppComponent } from './app.component';

// describe('AppComponent', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   }));

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'sss'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('sss');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement;
//     expect(compiled.querySelector('.content span').textContent).toContain('sss app is running!');
//   });
// });
