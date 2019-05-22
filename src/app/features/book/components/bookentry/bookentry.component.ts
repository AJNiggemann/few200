import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddedBook } from '../../actions/add.book';
import { State } from '../../reducers/books.reducer';

@Component({
  selector: 'app-bookentry',
  templateUrl: './bookentry.component.html',
  styleUrls: ['./bookentry.component.css']
})
export class BookEntryComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  insert(input1: HTMLInputElement, input2: HTMLInputElement, input3: HTMLInputElement) {
    const book = input1.value;
    const author = input2.value;
    const format = input3.value;
    this.store.dispatch(new AddedBook(book, author, format));
    input1.value = '';
    input2.value = '';
    input1.focus();
  }

}
