import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupOneComponent } from './setup-one.component';

describe('SetupOneComponent', () => {
  let component: SetupOneComponent;
  let fixture: ComponentFixture<SetupOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
