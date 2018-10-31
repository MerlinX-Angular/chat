import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AuthorService } from './author.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AuthService {

  user$: Observable<firebase.User>;
  displayName: string;
  photoUrl: string;
  currentUserUid: string;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private authorService: AuthorService,
    private db: AngularFireDatabase
   ) {
         // jeigu vartotojas prisijungęs paimame duomenis iš firebase vidinio objekto
        this.user$ = this.afAuth.authState;
         this.user$.subscribe(user => {
          if (user) {
          //  console.log('user signed', this.photoUrl);
            this.displayName = user.displayName;           // prisijungusio vartotojo vardas
            this.photoUrl = user.providerData[0].photoURL; // nuotrauką paima iš google nustatymų giliau
            this.currentUserUid = user.uid;               // prisijungusio vartotojo uid
          } else {
          //  console.log('user not signed');
            this.displayName = '';
            this.photoUrl = '';
            this.currentUserUid = '';
          }
        });
      }
//  get currentUserUid() {
//    return this._currentUserUid;
//  }

  signInWithGoogle(): void {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(result => {
      this.router.navigate(['/']);
      const user = result.user;
      this.authorService.addAuthor(user.uid, user.displayName, user.providerData[0].photoURL);
    });
  }

  signOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/signin']);
  }

    // paimame prisijungusio vartotojo vardą iš firebase objekto authors
  getAuthorsName() {
   return this.db.object('/authors/' + this.currentUserUid);
  }


}
