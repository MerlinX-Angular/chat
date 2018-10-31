import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { PostService } from '../services/post.service';
import { Post } from '../post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  postText: string;
  currentUserUid: string;

  constructor(
    public authService: AuthService,
    public postService: PostService
  ) { }

   // nuspaudus į firebase ir šabloną įkeliame naują post
  onSubmit() {
      const post = new Post({
      body: this.postText,                         // post tekstas
      authorKey: this.authService.currentUserUid, // prisijungusio vartotojo uid
      postImage: this.authService.photoUrl,      // prisijungusio vartotojo nuotrauka
      postName: this.postService.postName        // prisijungusio vartotojo vardas
    });
    this.postService.add(post);
    this.postText = '';
  }

}
