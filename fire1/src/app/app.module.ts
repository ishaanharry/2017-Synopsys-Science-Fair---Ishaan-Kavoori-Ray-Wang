import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { WeatherInputComponent } from './weather-input/weather-input.component';
import { WeatherEditComponent } from './weather-edit/weather-edit.component';

const appRoutes: Routes = [
  {
    path: 'weathers',
    component: WeatherComponent,
    data: { title: 'Weather List' }
  },
  {
    path: 'weather-details/:id',
    component: WeatherDetailComponent,
    data: { title: 'Weather Details' }
  },
  {
    path: 'weather-input',
    component: WeatherInputComponent,
    data: { title: 'Input Location' }
  },
  {
    path: 'weather-edit/:id',
    component: WeatherEditComponent,
    data: { title: 'Edit Weather' }
  },
  { path: '',
    redirectTo: '/weathers',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherDetailComponent,
    WeatherInputComponent,
    WeatherEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
