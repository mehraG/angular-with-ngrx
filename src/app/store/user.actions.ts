import { Action } from '@ngrx/store';
import { IUser } from './user.model';

export const FETCH_USER = '[USER] Fetch Users';
export const FETCH_USER_SUCCESS = '[USER] Fetch Users Success';
export const FETCH_USER_FAILURE = '[USER] Fetch Users Failure';
export const ADD_USER = '[USER] Add User';
export const ADD_USER_SUCCESS = '[USER] Add User Success';
export const ADD_USER_FAILURE = '[USER] Add User Failure';
export const REMOVE_USER = '[USER] Remove User';
export const REMOVE_USER_SUCCESS = '[USER] Remove User Success';
export const REMOVE_USER_FAILURE = '[USER] Remove User Failure';
export const UPDATE_USER = '[USER] Update User';
export const UPDATE_USER_SUCCESS = '[USER] Update User Success';
export const UPDATE_USER_FAILURE = '[USER] Update User Failure';

export class FetchUser implements Action {
  readonly type = FETCH_USER;
}
export class FetchUserSuccess implements Action {
  readonly type = FETCH_USER_SUCCESS;
  constructor(public payload: IUser[]) { }
}
export class FetchUserFailure implements Action {
  readonly type = FETCH_USER_FAILURE;
  constructor(public payload: Error) { }
}

export class AddUser implements Action {
  readonly type = ADD_USER;
  constructor(public payload: IUser) { }
}
export class AddUserSuccess implements Action {
  readonly type = ADD_USER_SUCCESS;
  constructor(public payload: IUser) { }
}
export class AddUserFailure implements Action {
  readonly type = ADD_USER_FAILURE;
  constructor(public payload: Error) { }
}

export class RemoveUser implements Action {
  readonly type = REMOVE_USER;
  constructor(public payload: string) { }
}
export class RemoveUserSuccess implements Action {
  readonly type = REMOVE_USER_SUCCESS;
  constructor(public payload: string) { }
}
export class RemoveUserFailure implements Action {
  readonly type = REMOVE_USER_FAILURE;
  constructor(public payload: Error) { }
}

export class UpdateUser implements Action {
  readonly type = UPDATE_USER;
  constructor(public payload: IUser) { }
}
export class UpdateUserSuccess implements Action {
  readonly type = UPDATE_USER_SUCCESS;
  constructor(public payload: IUser) { }
}
export class UpdateUserFailure implements Action {
  readonly type = UPDATE_USER_FAILURE;
  constructor(public payload: Error) { }
}

export type Actions = FetchUser | FetchUserSuccess | FetchUserFailure |
  AddUser | AddUserSuccess | AddUserFailure |
  RemoveUser | RemoveUserSuccess | RemoveUserFailure |
  UpdateUser | UpdateUserSuccess | UpdateUserFailure;