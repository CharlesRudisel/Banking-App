import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcctCardComponent } from './acct-card.component';

describe('AcctCardComponent', () => {
  let component: AcctCardComponent;
  let fixture: ComponentFixture<AcctCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcctCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcctCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
