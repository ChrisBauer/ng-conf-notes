import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RouteConfig, ROUTER_DIRECTIVES, RouteParams } from '@angular/router-deprecated';
import { NotesService } from '../../services/notes.service';
import { Note } from '../../interfaces/note.interface';
import 'rxjs/Rx';
import * as marked from 'marked';


@Pipe({
    name: 'markdown'
})
class MarkdownPipe implements PipeTransform {
    transform (value) {
        return marked.parse(value);
    }
}
@Component({
  selector: 'note',
  template: require('./note-route.html'),
  styles: [require('./note-route.scss')],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  inputs: [],
  pipes: [MarkdownPipe]
})
export class NoteRoute implements OnInit {
  
  md: string = '';
  note: Note;

  constructor(private routeParams: RouteParams, private http: Http, private notesService: NotesService) {
    // Do stuff
  }

  ngOnInit() {
      let key = this.routeParams.get('name');
      this.notesService.getNote(key)
        .then(note => {
            this.note = note;
            console.log(note);
            this.http.get('/notes/' + note.key + '.md')
            .subscribe(
                mdText => this.md = mdText.text(),
                err => console.log(err)
            );
        });
  }

}
