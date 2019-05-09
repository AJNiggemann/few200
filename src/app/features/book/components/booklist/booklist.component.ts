import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddedBook } from '../../actions/add.book';
import { State } from '../../reducers/books.reducer';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  insert(book: HTMLInputElement) {
    const task = book.value;
    this.store.dispatch(new AddedBook(task));
    book.value = '';
    book.focus();
  }

}
