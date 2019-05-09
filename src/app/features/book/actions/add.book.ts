import { Action } from '@ngrx/store';

export const BOOK_ADDED = '[book] book added';
export class AddedBook implements Action {
  readonly type = BOOK_ADDED;
  title: string;
  author: string;
  format: string;
  constructor(public book: string) {
    this.title = this.title;
    this.author = this.author;
    this.format = this.format;
  }
}

export type All =
  AddedBook;

