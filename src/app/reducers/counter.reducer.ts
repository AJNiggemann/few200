// import { Action } from '@ngrx/store';
import * as actions from '../actions/counter.actions';
import { tassign } from 'tassign'; // got there by using [npm i tassign]



export interface State {
  count: number;
  by: 1 | 3 | 5;
}

const initialState: State = {
  count: 0,
  by: 1
};

export function reducer(state: State = initialState, action: actions.ALL): State {
  switch (action.type) {
    case actions.SET_COUNT_BY: {
      return tassign(state, { by: action.by });
      // return {
      //   count: state.count,
      //   by: action.by
      // };
    }
    case actions.RESET: {
      return initialState; // defined above in line 12
    }
    case actions.INCREMENT: {
      return tassign(state, { count: state.count + state.by });
      // return {
      //   count: state.count + state.by,
      //   by: state.by
      // };
    }
    case actions.DECREMENT: {
      return tassign(state, { count: state.count - state.by });
      // return {
      //   count: state.count - state.by,
      //   by: state.by
      // };
    }
    default: {
      return state;
    }
  }
}
