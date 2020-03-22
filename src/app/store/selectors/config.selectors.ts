import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { IConfigState } from '../state/config.state';

const configState = (state: IAppState) => state.configState;

export const selectConfig = createSelector(configState, (state: IConfigState) => state.config);
