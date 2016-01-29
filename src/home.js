import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class NowPlaying {
  heading = 'Popular Movies';
  movies = [];

  constructor(http) {
    http.configure(config => {
      config
        .withBaseUrl('https://api.themoviedb.org/3/movie/now_playing?api_key=8138f629c34a57fd17ae183b7eb41931')
        .withDefaults({
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': *
            }
        })
    });

    this.http = http;
  }

  activate() {
    return this.http.fetch('movies')
      .then(response => response.json())
      .then(movies => this.movies = movies);
  }
}
