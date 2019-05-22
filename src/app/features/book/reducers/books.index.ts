import * as fromBooks from './books.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookInfo } from '../models';


export interface State {
  books: fromBooks.State;
}

export const reducers = {
  books: fromBooks.reducer
};


const selectBook =
  createFeatureSelector<State>('booksFeature');

const selectBooksBranch =
  createSelector(selectBook, b => b.books);

const { selectAll: selectAllBookEntities } =
  fromBooks.adapters.getSelectors(selectBooksBranch);

export const selectAllBookItems =
  createSelector(selectAllBookEntities, b => b as BookInfo[]);

