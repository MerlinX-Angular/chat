import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { PostService } from './services/post.service';
import { AuthorService } from './services/author.service';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {NoConflictStyleCompatibilityMode} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule,
         MatRadioModule,
         MatSelectModule,
         MatInputModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatIconModule,
         MatButtonModule,
         MatChipsModule,
         MatProgressSpinnerModule,
         MatTooltipModule,
         MatToolbarModule,
         MatSidenavModule,
         MatTabsModule,
         MatListModule,
         MatDialogModule,
         MatCardModule,
         MatSnackBarModule
                       } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { ReversePipe } from './reverse.pipe';


export const firebaseConfig = {
  apiKey: 'AIzaSyCRKwoTxflRpnjnOlZ2aJx3HRAh_zjihp0',
  authDomain: 'chatas1-5458a.firebaseapp.com',
  databaseURL: 'https://chatas1-5458a.firebaseio.com',
  projectId: 'chatas1-5458a',
  storageBucket: '',
  messagingSenderId: '495467493964'
 };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    MyPostsComponent,
    CreatePostComponent,
    PostListComponent,
    PostComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
	NoConflictStyleCompatibilityMode,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,

    MatTabsModule,
    MatDialogModule,
    FlexLayoutModule,
    MatSnackBarModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    PostService,
    AuthorService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
