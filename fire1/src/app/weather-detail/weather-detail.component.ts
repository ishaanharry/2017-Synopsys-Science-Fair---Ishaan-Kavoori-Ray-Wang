import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherDetailComponent implements OnInit {

  weather = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getWeatherDetail(this.route.snapshot.params['id']);
  }

  getWeatherDetail(id) {
    this.http.get('/weather/'+id).subscribe(data => {
      this.weather = data;
    });
  }

  deleteWeather(id) {
    this.http.delete('/weather/'+id)
      .subscribe(res => {
          this.router.navigate(['/weathers']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
