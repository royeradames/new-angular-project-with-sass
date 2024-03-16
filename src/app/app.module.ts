import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgOptimizedImage } from '@angular/common';
import { BlogPreviewCardComponent } from './modules/blog-preview-card/blog-preview-card.component';
import { BlogCardComponent } from './modules/blog-preview-card/blog-card/blog-card.component';

@NgModule({
  declarations: [AppComponent, BlogPreviewCardComponent, BlogCardComponent],
  imports: [BrowserModule, AppRoutingModule, NgOptimizedImage],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
