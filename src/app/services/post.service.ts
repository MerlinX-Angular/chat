import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Post } from '../post';
import { AuthService } from './auth.service';


@Injectable()
export class PostService {
  postName: string;
  postPhoto: string;
  public postsStream: any;
  private postQuantity = 5;
  public hideDisplayMore = false;
  quantity: number;
  result;

  constructor(
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {  // kelias prie firebase objekto posts
      this.postsStream = this.db.list('/posts', {
        query: { // nustatome pradinį rodomą post eilučių skaičių
        limitToLast: this.postQuantity,
        }
      });
        // paimame postName iš firebase objekto authors
      this.authService.getAuthorsName().subscribe(authors => {
      this.postName = authors.displayName;
      });
       // sužinome post eilučių skaičių
      this.db.list('/posts').subscribe(quantity => { this.quantity = quantity.length; });
    }

   // įkeliame formoje įvestus duomenis į firebase duomenų bazę
  add(post: Post): void {
    this.postsStream.push(post);
  }

  displayMorePosts(): void { // nustatome sekantį rodomų post eilučių skaičių
    const quant = 5;
    this.postQuantity = this.postQuantity + (quant * 1);
    this.postsStream = this.db.list('/posts', {
      query: {
       limitToLast: this.postQuantity
      }
    });
    this.result = this.quantity < this.postQuantity; // rodome mygtuką arba ne 'Load more posts'
  }

  delete(key: string) {
    return this.db.object('/posts/' + key).remove();
  }

  update(key, post) {
    return this.db.object('/posts/' + key).update(post);

  }

  showOnlyMyPosts() {
    return this.db.list('/posts', {
      query: {
        orderByChild: 'authorKey',
        equalTo: this.authService.currentUserUid
        }
    });
  }
}
