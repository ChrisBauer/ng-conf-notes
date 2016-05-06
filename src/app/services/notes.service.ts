import {Injectable} from '@angular/core';
import {Note} from '../interfaces/note.interface';
import { HTTP_PROVIDERS, Http, Response } from '@angular/http';

@Injectable()
export class NotesService {
    notes: Promise<Array<Note>>;
    
    constructor (private http: Http) {
        this.notes = this.http.get('/notes/_notes.json')
            .map(res => {
                return res.json(); 
            })
            .toPromise()
            .then(notes => notes.sort((a, b) => a.day > b.day));
    }
    
    getNotes () {
        return this.notes;
    }
    
    getNote (key) : Promise<Note> {
        return this.getNotes().then( notes => notes.find(note => note.key === key) || null);
    }
}