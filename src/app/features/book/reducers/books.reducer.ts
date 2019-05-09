import * as actions from '../actions/add.book';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

export interface BookEntity {
  title: string;
  author: string;
  format: string;
}

export interface State extends EntityState<BookEntity> {

}

const initialState: State = {
  ids: ['0'],
  entities: {
    1: {
      title: '',
      author: '',
      format: ''
    }
  }
};

export const adapters = createEntityAdapter<BookEntity>();

export function reducer(state: State = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.BOOK_ADDED: {
      const bookToAdd: BookEntity = {
        title: action.title, author: action.author, format: action.format
      };
      return adapters.addOne(bookToAdd, state);
    }
    default: {
      return state;
    }
  }
}
