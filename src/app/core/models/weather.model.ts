export interface Weather {
  datetime: string; // Date and time of the weather data
  name: string; // Name of the location (e.g., city)
  temperature: string; // Temperature in degrees Fahrenheit
  feelslike: string; // Feels like temperature in degrees Fahrenheit
  humidity: string; // Humidity percentage
  windspeed: string; // Wind speed in miles per hour
  icon?: string; // Optional weather icon URL
}
