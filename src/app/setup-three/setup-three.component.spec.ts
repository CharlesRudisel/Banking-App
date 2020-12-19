import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupThreeComponent } from './setup-three.component';

describe('SetupThreeComponent', () => {
  let component: SetupThreeComponent;
  let fixture: ComponentFixture<SetupThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
