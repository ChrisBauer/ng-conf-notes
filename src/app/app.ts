import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {FORM_PROVIDERS} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';

import '../style/app.scss';

import {Api} from './services/api/api';
import {NotesService} from './services/notes.service';
import {Notes} from "./components/notes/notes";
import {NoteRoute} from "./components/note/note-route";

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app', // <app></app>
  providers: [...FORM_PROVIDERS, ...HTTP_PROVIDERS, Api, NotesService],
  directives: [...ROUTER_DIRECTIVES],
  pipes: [],
  styles: [require('./app.scss')],
  template: require('./app.html')
})
@RouteConfig([
  {path: '/', component: Notes, name: 'Notes'},
  {path: '/:name', component: NoteRoute, name: 'Note'}
])
export class App {
  url: string = 'https://github.com/preboot/angular2-webpack';

  constructor(public api: Api) {
  }
}
