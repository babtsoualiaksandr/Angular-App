import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { UserService } from 'src/app/services/user.service';
import { GetUser, EUserActions, GetUserSuccess, GetUsers, GetUsersSuccess } from '../actions/user.action';
import { map, withLatestFrom, switchMap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { of, Observable } from 'rxjs';
import { selectUserList } from '../selectors/user.selectors';
import { IUser } from '../models/iuser';

@Injectable()
export class UserEffects {
  @Effect()
  public getUser$: Observable<GetUserSuccess> = this.actions$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectUserList))),
    switchMap(([id, users]) => {
      const selectedUser: IUser = users.filter(user => user.id === +id)[0];
      return of(new GetUserSuccess(selectedUser));
    }),
  );

  public getUsers$: Observable<GetUsersSuccess>  = this.actions$.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),
    switchMap(() => this.userService.getUsers()),
    switchMap((users: IUser[]) => of(new GetUsersSuccess(users))),
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private store: Store<IAppState>,
  ) {}
}
