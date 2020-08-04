import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';

import * as UserActions from './user.actions'
import { of } from 'rxjs';
import { UserService } from '../user.service';


@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private usrSrvc: UserService) { }

  @Effect() fetchUser$ = this.actions$
    .pipe(
      ofType<UserActions.FetchUser>(UserActions.FETCH_USER),
      mergeMap(
        () => this.usrSrvc.fetchUserSrvc()
          .pipe(
            map(data => {
              return new UserActions.FetchUserSuccess(data)
            }),
            catchError(error => of(new UserActions.FetchUserFailure(error)))
          )
      ),
    )

  @Effect() addUser$ = this.actions$
    .pipe(
      ofType<UserActions.AddUser>(UserActions.ADD_USER),
      mergeMap(
        (data) => this.usrSrvc.addUserSrvc(data.payload)
          .pipe(
            tap(el => console.log('data from server', el)),
            map(() => new UserActions.AddUserSuccess(data.payload)),
            catchError(error => of(new UserActions.AddUserFailure(error)))
          )
      )
    )

  @Effect() deleteUser$ = this.actions$
    .pipe(
      ofType<UserActions.RemoveUser>(UserActions.REMOVE_USER),
      mergeMap(
        (data) => this.usrSrvc.removeUserSrvc(data.payload)
          .pipe(
            map(() => new UserActions.RemoveUserSuccess(data.payload)),
            catchError(error => of(new UserActions.RemoveUserFailure(error)))
          )
      )
    )

  @Effect() updateUser$ = this.actions$
    .pipe(
      ofType<UserActions.UpdateUser>(UserActions.UPDATE_USER),
      mergeMap(
        (data) => this.usrSrvc.updateUserSrvc(data.payload)
          .pipe(
            tap(el => console.log('updated data from server', el)),
            map(() => new UserActions.UpdateUserSuccess(data.payload)),
            catchError(error => of(new UserActions.UpdateUserFailure(error)))
          )
      )
    )

}