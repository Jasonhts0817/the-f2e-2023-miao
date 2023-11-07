import { Component, Inject } from '@angular/core';
import { DIALOG_DATA, Dialog, DialogRef } from '@angular/cdk/dialog';
import { Icon } from 'src/app/core/enums/icon.enum';
import { Size } from 'src/app/core/enums/size.enum';
import { Theme } from 'src/app/core/enums/theme.enum';
import { IconComponent } from '../../icon.component';
import { DialogComponent } from '../dialog/dialog.component';
import { CommonModule, DatePipe } from '@angular/common';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  standalone: true,
  imports: [CommonModule, IconComponent, DialogComponent, DatePipe],
})
export class PostComponent {
  otherPosts: Post[];
  currentPost: Post;
  title: string;
  morePostTitle: string;
  Icon = Icon;
  Size = Size;

  constructor(
    @Inject(DIALOG_DATA)
    public data: {
      title: string;
      morePostTitle: string;
      currentPost: Post;
      posts: Post[];
    },
    public dialogRef: DialogRef,
    private dialog: Dialog,
  ) {
    this.title = data.title;
    this.morePostTitle = data.morePostTitle;
    this.currentPost = data.currentPost;
    this.otherPosts = data.posts.filter(({ id }) => id !== data.currentPost.id);
  }

  openPostDialog(post: Post) {
    this.dialog.open(PostComponent, {
      data: {
        ...this.data,
        currentPost: post,
      },
    });
    this.dialogRef.close();
  }
}
export interface Post {
  id: number;
  tag?: string;
  theme?: Theme;
  date?: string;
  title: string;
  article: { title?: string; desc: string }[];
  imgUrl: {
    png: string;
    webp: string;
  };
}
