import { Component, OnInit } from '@angular/core';
import { TriangleCalculationService } from '../../services/triangle-calculation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var ts: any;

@Component({
  selector: 'app-triangle-type',
  templateUrl: './triangle-type.component.html',
  styleUrls: ['./triangle-type.component.css']
})
export class TriangleTypeComponent implements OnInit {
  triangleType: string = '';
  triangleForm: FormGroup;

  constructor(
    private triangleService: TriangleCalculationService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.triangleForm = this.formBuilder.group({
      dimensions: [{ value: '', disabled: false }, Validators.required]
    });
  }

  calculateTriangle(): void {
    let parsedValue = this.parseInputValue(
      this.triangleForm.value.dimensions.trim()
    );
    this.triangleType = this.triangleService.getTriangleType(
      parsedValue[0],
      parsedValue[1],
      parsedValue[2]
    );

    if (this.triangleType.includes('[ERROR]')) {
      ts.ui.Notification.error(this.triangleType, {});
    } else {
      ts.ui.Notification.info(this.triangleType, {
        onaccept: function() {
          ts.ui.Notification.success('Thank you');
        }
      });
    }
  }

  clearInput(): void {
    this.triangleForm.controls.dimensions.setValue('');
  }

  parseInputValue(input: string): Array<number> {
    let numbers = input.split(',');

    return [parseInt(numbers[0]), parseInt(numbers[1]), parseInt(numbers[2])];
  }
}
