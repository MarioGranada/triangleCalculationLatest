import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TriangleTypeComponent } from './triangle-type.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TriangleCalculationService } from 'src/app/services/triangle-calculation.service';
import { triangleTypes } from 'src/app/shared/enums/triangle-types.enum';

class TriangleCalculationMockService {
  getTriangleType() {
    //Stubbed value, could be anyone.
    return triangleTypes.equilateral;
  }
}

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

  it('should have a form with a text input and two buttons', () => {
    expect(By.css('form')).not.toBe(null);
    expect(By.css('input[type=text]')).not.toBe(null);
    expect(By.css('button[class="ts-primary"')).not.toBe(null);
    expect(By.css('button[class="ts-tertiary"')).not.toBe(null);
  });

  it('should have a createForm() function', () => {
    expect(typeof component.createForm).toBe('function');
  });

  it('should have a calculateTriangle() function', () => {
    expect(typeof component.calculateTriangle).toBe('function');
  });

  it('should have a clearInput() function', () => {
    expect(typeof component.clearInput).toBe('function');
  });

  it('should have a parseInputValue() function', () => {
    expect(typeof component.parseInputValue).toBe('function');
  });

  it('should instantiate the form when createForm() is called', () => {
    component.createForm();
    expect(component.triangleForm).not.toBe(null);
    expect(component.triangleForm).not.toBe(undefined);
  });

  it('should calculate triangle type when calculateTriangle() is called', () => {
    component.createForm();
    component.triangleForm.setValue({ dimensions: '20,20,20' }); // Stubbed values, could be anyone.
    component.calculateTriangle();
    expect(component.triangleType).not.toEqual('');
  });

  it('should clear the form input when clearInput() is called', () => {
    component.createForm();
    component.triangleForm.setValue({ dimensions: '20,20,20' }); // Stubbed values, could be anyone.
    component.clearInput();
    expect(component.triangleForm.value.dimensions).toEqual('');
  });

  it('should return a parsed value when parseInputValue() is called', () => {
    let parsedInput = component.parseInputValue('20,20,20'); // Stubbed values, could be anyone.
    expect(parsedInput.length).toEqual(3);
  });
});
