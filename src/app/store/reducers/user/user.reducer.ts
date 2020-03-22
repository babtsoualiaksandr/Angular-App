import { Action, createReducer, on } from '@ngrx/store';


export const userFeatureKey = 'user';

export interface State {

}

export const initialState: State = {

};

const userReducer = createReducer(
  initialState,

);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}
