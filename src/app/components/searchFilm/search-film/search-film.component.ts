/* tslint:disable:no-inferrable-types no-trailing-whitespace */
import {Component, Input, OnInit} from '@angular/core';

import { Film } from '../../../models/Film';
import {FilmService} from '../../../services/film.service';

@Component({
  selector: 'app-search-film',
  templateUrl: './search-film.component.html',
  styleUrls: ['./search-film.component.css']
})
export class SearchFilmComponent implements OnInit {

  filmTitle: string = 'Chose a film title please...';
  film: Film;
  loading: boolean = false;
  errorMessage: string;
  filmExists: boolean = false;
  message: string = 'Please search the Title of any Film :)';

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public getFilms() {
    this.loading = true;
    this.errorMessage = '';
    this.filmService.getFilm(this.filmTitle)
      .subscribe(
        (response: any) => {
          console.log('response received');
          if (response.Response === 'False') {
            console.log('response is false');
            this.film = null;
            this.message = response.Error;
          } else {
            console.log('response is true');
            this.film = response;
            this.filmExists = true;
          }
        },
        (error) => {
          console.error('Request failed with error');
          this.errorMessage = error;
          this.loading = false;
        },
        () => {
          console.log('Request completed');
          this.loading = false;
        }
      );
  }

}
















