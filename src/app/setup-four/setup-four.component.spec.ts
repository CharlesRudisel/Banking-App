import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupFourComponent } from './setup-four.component';

describe('SetupFourComponent', () => {
  let component: SetupFourComponent;
  let fixture: ComponentFixture<SetupFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
