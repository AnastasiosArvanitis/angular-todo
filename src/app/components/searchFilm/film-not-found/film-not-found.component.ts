import {Component, Input, OnInit} from '@angular/core';

import {Film} from '../../../models/Film';

@Component({
  selector: 'app-film-not-found',
  templateUrl: './film-not-found.component.html',
  styleUrls: ['./film-not-found.component.css']
})
export class FilmNotFoundComponent implements OnInit {
  @Input() filmExists: boolean;
  @Input() message: string;
  constructor() { }

  ngOnInit(): void {
  }

}
