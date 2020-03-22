import { RouterReducerState } from '@ngrx/router-store';
import { IUserState, initialUserState } from './user.state';
import { IConfigState, initialConfigState } from './config.state';

export interface IAppState {
  router?: RouterReducerState;
  userState: IUserState;
  configState: IConfigState;
}

export const initialAppState: IAppState = {
  userState: initialUserState,
  configState: initialConfigState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
