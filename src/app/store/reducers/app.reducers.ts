import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { routerReducer } from '@ngrx/router-store';
import { userReducers } from './user.reducer';
import { configReducers } from './configRedusers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  userState: userReducers,
  configState: configReducers
};
