import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { BookInfo } from './models';
import { State } from './reducers/books.reducer';
import { selectAllBookItems } from './reducers/books.index';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books$: Observable<BookInfo[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.books$ = this.store.select(selectAllBookItems);
  }

}
