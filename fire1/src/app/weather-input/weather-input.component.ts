import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-input',
  templateUrl: './weather-input.component.html',
  styleUrls: ['./weather-input.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherInputComponent implements OnInit {

  weather = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveWeather() {
    this.http.post('/weather', this.weather)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/weather-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
