import {Injectable} from '@angular/core';
import {Note} from '../interfaces/note.interface';
import { HTTP_PROVIDERS, Http, Response } from '@angular/http';

@Injectable()
export class NotesService {
    notes: Promise<Array<Array<Note>>>;
    
    constructor (private http: Http) {
        this.notes = this.http.get('/notes/_notes.json')
            .map(res => {
                return res.json();
            })
            .toPromise()
            .then(notes => {
                return notes.reduce((acc, note) => {
                    let index: number = note.day - 1;
                    if (acc[index]) {
                        acc[index].push(note);
                    }
                    else {
                        acc[index] = [note];
                    }
                    return acc;
                }, []);
            });
    }
    
    getNotes () {
        return this.notes;
    }
    
    getNote (key) : Promise<Note> {
        return this.getNotes().then( notes => 
            notes.reduce((acc, noteList) => acc.concat(noteList), [])
                 .find(note => note.key === key)
            );
    }
}
