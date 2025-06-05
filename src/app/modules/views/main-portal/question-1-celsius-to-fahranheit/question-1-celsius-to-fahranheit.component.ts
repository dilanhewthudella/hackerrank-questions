import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import e from 'express';

@Component({
  selector: 'app-question-1-celsius-to-fahranheit',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule],
  templateUrl: './question-1-celsius-to-fahranheit.component.html',
  styleUrl: './question-1-celsius-to-fahranheit.component.scss',
})
export class Question1CelsiusToFahranheitComponent {
  celcius: number = 0;
  fahrenheit: number = 0;

  convertToFahrenheit(temperture: any) {
    this.fahrenheit = (temperture * 9) / 5 + 32;
  }
  convertToCelsius(temperture: any) {
    this.celcius = ((temperture - 32) * 5) / 9;
  }
  changeTempreture($event: any, type: string) {
    if (type == 'celsius') {
      this.convertToFahrenheit($event);
    } else if (type == 'fahrenheit') {
      this.convertToCelsius($event);
    } else {
      this.celcius = 0;
      this.fahrenheit = 0;
    }
  }
}
