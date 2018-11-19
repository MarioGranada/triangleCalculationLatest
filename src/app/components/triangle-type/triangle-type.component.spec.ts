import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangleTypeComponent } from './triangle-type.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TriangleCalculationService } from 'src/app/services/triangle-calculation.service';

class TriangleCalculationMockService {}

describe('TriangleTypeComponent', () => {
  let component: TriangleTypeComponent;
  let fixture: ComponentFixture<TriangleTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TriangleTypeComponent],
      imports: [ReactiveFormsModule],
      providers: [
        {
          provide: TriangleCalculationService,
          useClass: TriangleCalculationMockService
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriangleTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
