import {Injectable} from '@angular/core' ;
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const APPID = 'ec6a68f4f8c15a6a8bd3670bc2124421';

@Injectable()
export class WeatherService{

 private baseUrl='http://api.openweathermap.org/data/2.5/';

    constructor(private http : Http){

         
    }
 
    getWeatherByZip(zip:string){
       	 return this.http.get(this.baseUrl +'weather?zip='+ zip +'&appid='+ APPID +'&units=metric')
    	 .map(response => response.json()
         .catch()
         );
    }

    getWeatherByCityState(city:string){
       	 return this.http.get(this.baseUrl +'weather?q='+ city +'&appid='+ APPID +'&units=metric')
    	 .map(response => response.json());
    }

   
}