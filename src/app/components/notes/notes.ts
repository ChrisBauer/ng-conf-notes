import {Component, OnInit} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { Note } from '../../interfaces/note.interface';
import { NotesService } from '../../services/notes.service';
import 'rxjs/Rx';

@Component({
  selector: 'notes',
  template: require('./notes.html'),
  styles: [require('./notes.scss')],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class Notes implements OnInit {
  
  noteList: Array<Note> = [];

  constructor(private notesService : NotesService) {
    // Do stuff
  }

  ngOnInit() {
    this.notesService.getNotes()
      .then(notes => this.noteList = notes);      
  }

}
