import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
  imports: [
    RouterLink,
    NgOptimizedImage,
  ],
  standalone: true,
})
export class BlogCardComponent {}
