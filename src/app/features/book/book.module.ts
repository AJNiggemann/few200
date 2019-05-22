import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { StoreModule } from '@ngrx/store';
import { BookEntryComponent } from './components/bookentry/bookentry.component';
import { BooklistComponent } from './components/booklist/booklist.component';
import { reducers } from './reducers/books.index';

@NgModule({
  declarations: [BookComponent, BookEntryComponent, BooklistComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('booksFeature', reducers)
  ],
  exports: [BookComponent]
})
export class BookModule { }
