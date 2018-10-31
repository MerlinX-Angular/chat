import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Author } from '../author';


@Injectable()
export class AuthorService {
  authorsPath = 'authors';

  constructor( private db: AngularFireDatabase ) { }

  // pridedame prisiregistravusį vartotoją į firebase authors objektą
  addAuthor(authorKey: string, displayName: string, photoUrl: string) {
    const author = new Author({
      displayName: displayName,
      photoUrl: photoUrl
    });
    this.db.object(`/${this.authorsPath}/${authorKey}`).set(author);
  }


}
