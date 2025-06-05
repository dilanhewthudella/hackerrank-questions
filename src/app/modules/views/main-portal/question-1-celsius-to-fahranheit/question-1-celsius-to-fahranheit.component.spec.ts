import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question1CelsiusToFahranheitComponent } from './question-1-celsius-to-fahranheit.component';

describe('Question1CelsiusToFahranheitComponent', () => {
  let component: Question1CelsiusToFahranheitComponent;
  let fixture: ComponentFixture<Question1CelsiusToFahranheitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Question1CelsiusToFahranheitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Question1CelsiusToFahranheitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
