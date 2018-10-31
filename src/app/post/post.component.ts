import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { AuthService } from '../services/auth.service';
import { PostService } from '../services/post.service';
import { MatSnackBar } from '@angular/material';

enum EditMode {
  notEditing = 0,
  displayEditButtons = 1,
  editing = 2
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  // importuojame [post] iš post-list.component.html
  @Input() post: Post;

  editingMode = EditMode.notEditing;
  updatedPostBody: string;
  link;
  constructor(
    private authService: AuthService,
    private postService: PostService,
    private snackBar: MatSnackBar
   ) {
   this.postService.postsStream.subscribe(link => { this.link = link;}) }

  ngOnInit() {
     if (this.post.authorKey === this.authService.currentUserUid) {
       this.editingMode = EditMode.displayEditButtons;
     }
  }

  editPost(inputEl: HTMLInputElement) {
    console.log('cscscscscs',inputEl)
    this.editingMode = EditMode.editing;
    console.log('edit',this.editingMode);
    this.updatedPostBody = this.post.body;
    console.log('edit',this.updatedPostBody);
      setTimeout ( () => {
      }, 2000);
      inputEl.focus(); // automatinis focus ant redaguojamo teksto
  }

  deletePost() {
    console.log('delete',this.link)
    this.postService.delete(this.post.$key);
    const snackBarRef = this.snackBar.open('Post removed', 'UNDO', { // jeigu triname
      duration: 5000
    });
    snackBarRef.onAction().subscribe(() => {
      const restoredPost = new Post();
      restoredPost.body = this.post.body;
      restoredPost.authorKey = this.authService.currentUserUid;
      restoredPost.postImage = this.post.postImage;
      restoredPost.postName = this.post.postName;
      this.postService.update(this.post.$key, restoredPost);
        this.snackBar.open('Post restored !', '', { // jeigu atšaukiame trynimą
          duration: 3000
        });
    });
  }

  save() {
    const updatedPost = new Post();
    updatedPost.body = this.updatedPostBody;
    updatedPost.authorKey = this.authService.currentUserUid;
    updatedPost.postImage = this.post.postImage;
    updatedPost.postName = this.post.postName;
    this.postService.update(this.post.$key, updatedPost);
    this.editingMode = EditMode.displayEditButtons;
  }

  cancel() {
    this.editingMode = EditMode.displayEditButtons;
  }

}
