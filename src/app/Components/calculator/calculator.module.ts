import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { CalculatorComponent } from './calculator.component';

@NgModule({
  imports: [CommonModule, FormsModule, NgxSliderModule],
  declarations: [CalculatorComponent],
  exports: [CalculatorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CalculatorModule {}
