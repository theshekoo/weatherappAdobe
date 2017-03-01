import { Component } from '@angular/core';
import {WeatherService} from './weather.Service';


@Component({
 selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers : [WeatherService]
})

export class WeatherComponent  { 
    city : string ;
    state : string;
    errorMessage: string;
    currentWeatherMain : string;
    currentWeatherDescription : string;
    lastReading : Date;
    temp: string;
    temp_min: string;
    temp_max: string;
    humidity : string;
    sunrise : Date;
    sunset : Date;
    name: string;
    weatherData: WeatherData[];

   constructor(private weatherService : WeatherService) {
    this.city = "New York " ;
    this.state = "NY";     
    }

   searchCurrentWeatherByCity(city: string){

       this.weatherService.getWeatherByCityState(city)
         .subscribe(data => {
         
          this.weatherData = data;
          this.temp = data.main.temp;
          this.humidity = data.main.humidity;
          this.currentWeatherMain= data.weather[0].main;
          this.currentWeatherDescription= data.weather[0].description;
          this.sunrise= data.sys.sunrise;
          this.sunset= data.sys.sunset;
          this.lastReading = data.dt;
           console.log( this.weatherData);
         }   
         ,
         error =>  this.errorMessage = <any>error           
     );
         
    }

    searchCurrentWeatherByZip(zip: string){

       this.weatherService.getWeatherByZip(zip)
         .subscribe(data => {
         
          this.weatherData = data;
          this.temp = data.main.temp;
          this.humidity = data.main.humidity;
          this.currentWeatherMain= data.weather[0].main;
          this.currentWeatherDescription= data.weather[0].description;
          this.sunrise= data.sys.sunrise;
          this.sunset= data.sys.sunset;
          this.lastReading = data.dt;
           console.log( this.weatherData);
         }    ,
         error =>  this.errorMessage = <any>error    
     );
         
    }
}

interface WeatherData {
  currentWeather : string,
  lastReading : Date,
  temp: string,
  temp_min: string,
  temp_max: string,
  humidity : string,
  sunrise : Date,
  sunset : Date,
  name: string

}