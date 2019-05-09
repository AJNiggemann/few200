import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BooklistComponent } from './components/booklist/booklist.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [BookComponent, BooklistComponent],
  imports: [
    CommonModule,
    // StoreModule.forFeature()
  ],
  exports: [BookComponent]
})
export class BookModule { }
