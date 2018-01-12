import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-edit',
  templateUrl: './weather-edit.component.html',
  styleUrls: ['./weather-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherEditComponent implements OnInit {

  weather = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getWeather(this.route.snapshot.params['id']);
  }

  getWeather(id) {
    this.http.get('/weather/'+id).subscribe(data => {
      this.weather = data;
    });
  }

  updateWeather(id, data) {
    this.http.put('/weather/'+id, data)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/weather-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
