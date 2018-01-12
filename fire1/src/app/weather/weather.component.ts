import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weathers: any;
  constructor(private http: HttpClient) { }
  ngOnInit() {
  	this.http.get('/weather').subscribe(data => {
   	 this.weathers = data;
  	});
  }

}
