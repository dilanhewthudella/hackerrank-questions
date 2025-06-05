import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherService } from '../../../../core/services/weather.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { Weather } from '../../../../core/models/weather.model';

@Component({
  selector: 'app-question-2',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    FormsModule,
  ],
  templateUrl: './question-2.component.html',
  styleUrl: './question-2.component.scss',
})
export class Question2Component {
  getWatherSubscription$!: Subscription;
  city: string = 'New York'; // Default city
  wetherdata!: Weather;
  constructor(private _weatherService: WeatherService) {}
  ngOnInit() {
    this.getWeatherData();
  }
  getWeatherData() {
    this.getWatherSubscription$ = this._weatherService
      .getWeatherData(this.city)
      .subscribe({
        next: (event) => {
          // Only log when the event is an HttpResponse
          this.wetherdata = event;
          console.log('Weather Data:', this.wetherdata);
        },
        error: (error) => {
          console.error('Error fetching weather data:', error);
        },
        complete: () => {
          console.log('Weather data fetch complete');
          this.getWatherSubscription$.unsubscribe();
        },
      });
  }
}
