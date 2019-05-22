import { Action } from '@ngrx/store';

let maxID = 99;

export const BOOK_ADDED = '[book] book added';
export class AddedBook implements Action {
  readonly type = BOOK_ADDED;
  id: string;
  constructor(public title: string, public author: string, public format: string) {
    this.id = 'T' + (maxID++).toString();
  }
}

export type All =
  AddedBook;
