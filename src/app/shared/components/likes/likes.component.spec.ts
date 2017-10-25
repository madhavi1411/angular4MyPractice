import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesComponent } from './likes.component';

describe('LikesComponent', () => {
  let component: LikesComponent;
  let fixture: ComponentFixture<LikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should check count value', () => {
    component.count  = 100;
    fixture.detectChanges();

    expect(component).toBeTruthy();
    expect(component.count).toBe(100);
    console.log(fixture.nativeElement.textContent);
    // console.log(fixture.nativeElement.innerHTML);
    expect(fixture.nativeElement.textContent).toContain('100');
    
  });
});
