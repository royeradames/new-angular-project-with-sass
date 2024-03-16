import { Component, Input } from '@angular/core';
import { ISharedBlogCard } from '../../../core/interfaces/shared-blog-card.interface';
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-shared-blog-card[sharedBlogCardConfig]',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
  ],
})
export class SharedBlogCardComponent {
  @Input() sharedBlogCardConfig!: ISharedBlogCard;
}
