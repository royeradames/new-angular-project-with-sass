import { Component } from '@angular/core'
import { ISharedBlogCard } from '../../core/interfaces/shared-blog-card.interface'
import { SharedBlogCardComponent } from '../../shared/components/blog-card/blog-card.component'
import { BlogCardComponent } from './blog-card/blog-card.component'
import { NgForOf } from '@angular/common'

@Component({
  selector: 'app-blog-preview-card',
  templateUrl: './blog-preview-card.component.html',
  styleUrls: ['./blog-preview-card.component.scss'],
  imports: [
    SharedBlogCardComponent,
    BlogCardComponent,
    NgForOf,
  ],
  standalone: true,
})
export class BlogPreviewCardComponent {
  sharedBlogCardConfig: ISharedBlogCard = {
    headerImage: {
      href: 'assets/images/blog-preview-card/illustration-article.svg',
      alt: 'article headerImage',
    },
    date: 'Published 21 Dec 2023',
    title: 'HTML & CSS foundations',
    titleLink: "#",
    description:
      'These languages are the backbone of every website, defining structure, content, and presentation.',
    avatarImage: {
      href: 'assets/images/blog-preview-card/image-avatar.webp',
      alt: 'Avatar',
      height: 32,
      width: 32,
    },
    authorsName: 'Greg Hooper',
  };

  get listSharedBlogCardConfig() {
    return [this.sharedBlogCardConfig];
  }
}
