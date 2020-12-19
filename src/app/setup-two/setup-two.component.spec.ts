import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupTwoComponent } from './setup-two.component';

describe('SetupTwoComponent', () => {
  let component: SetupTwoComponent;
  let fixture: ComponentFixture<SetupTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
