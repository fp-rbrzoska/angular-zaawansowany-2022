import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpTestComponent } from './fp-test.component';

describe('FpTestComponent', () => {
  let component: FpTestComponent;
  let fixture: ComponentFixture<FpTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FpTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FpTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
