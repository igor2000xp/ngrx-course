import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

// export const authFeatureKey = 'auth';

export interface AuthState {
  user?: string;
};
export const initialState: AuthState = { user: undefined };

export const reducers: ActionReducerMap<AuthState> = {

};


// export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
