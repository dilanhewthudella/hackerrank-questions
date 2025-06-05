import { HttpClient, HttpSentEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Weather } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  BASE_URL = environment.WEATHER_API_URL;
  KEY = environment.WEATHER_API_KEY;
  constructor(private _httpClient: HttpClient) {}
  getWeatherData(city: string): Observable<Weather> {
    console.log(
      'Fetching weather data for city:',
      this.BASE_URL + this.KEY + '&q=' + city
    );
    return this._httpClient
      .get<any>(this.BASE_URL + this.KEY + '&q=' + city)
      .pipe(
        map(
          (response) =>
            ({
              datetime: response.location.localtime,
              name: response.location.name,
              temperature: response.current.temp_f,
              feelslike: response.current.condition.text,
              humidity: response.current.humidity,
              windspeed: response.current.wind_mph,
              icon: response.current.condition.icon,
            } as Weather)
        )
      );
  }
}
