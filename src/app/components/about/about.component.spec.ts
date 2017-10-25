import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { FormsModule } from '@angular/forms';

fdescribe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule

      ],
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have member 1, member 2', () => {
    console.log(fixture.nativeElement.textContent);
    // console.log(fixture.nativeElement.innerHTML);
    expect(fixture.nativeElement.textContent).toContain('Member 1');
    expect(fixture.nativeElement.textContent).toContain('Member 2');
    expect(component).toBeTruthy();
  });

  it('should click on empty and clear', () => {
    component.empty();
    fixture.detectChanges();
    // console.log(fixture.nativeElement.textContent);
    console.log(fixture.nativeElement.innerHTML);
    expect(fixture.nativeElement.textContent).not.toContain('Member 1');
    expect(fixture.nativeElement.textContent).not.toContain('Member 2');
    expect(component).toBeTruthy();
  });
});
