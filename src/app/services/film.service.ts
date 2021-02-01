import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Film} from '../models/Film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  filmUrl = 'http://www.omdbapi.com/';
  apikey = '&apikey=8b8c8a47';

  constructor(private http: HttpClient) { }

  getFilm(filmTitle: string): Observable<any> {
    const url = `${this.filmUrl}?t=${filmTitle}${this.apikey}`;
    return this.http.get<Film>(`${url}`);
  }

}
