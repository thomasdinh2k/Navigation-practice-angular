import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsPracticeComponent } from './obs-practice.component';

describe('ObsPracticeComponent', () => {
  let component: ObsPracticeComponent;
  let fixture: ComponentFixture<ObsPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObsPracticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
