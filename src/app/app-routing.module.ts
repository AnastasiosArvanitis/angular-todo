import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosComponent } from './components/todos/todos.component';
import {AboutComponent} from './components/pages/about/about.component';
import {PlayComponent} from './components/pages/play/play/play.component';
import {SearchFilmComponent} from './components/searchFilm/search-film/search-film.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'about', component: AboutComponent },
  { path: 'play', component: PlayComponent },
  { path: 'searchFilm', component: SearchFilmComponent }
];


@NgModule({
  // @ts-ignore
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
