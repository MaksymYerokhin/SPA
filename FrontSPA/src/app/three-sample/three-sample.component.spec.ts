import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeSampleComponent } from './three-sample.component';

describe('ThreeSampleComponent', () => {
  let component: ThreeSampleComponent;
  let fixture: ComponentFixture<ThreeSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
