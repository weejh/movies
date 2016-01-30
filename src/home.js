import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class PopularMovies {
  heading = 'Popular Movies';
  popularMovies = [];

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://api.themoviedb.org/3/movie/now_playing?api_key=8138f629c34a57fd17ae183b7eb41931');
    });

    this.http = http;
  }

  activate() {
    return this.http.fetch('')
      .then(response => response.json())
      // .then(listOfMovies => console.log(listOfMovies.results))
      .then(listofMovies => listofMovies.results = popularMovies)

  }
}
