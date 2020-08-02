import { Action } from '@ngrx/store';
import { IUser } from './user.model';

export const ADD_USER = '[USER] Add'
export const REMOVE_USER = '[USER] Remove'

export class AddUser implements Action {
  readonly type = ADD_USER;
  constructor(public payload: IUser) { }
}

export class RemoveUser implements Action {
  readonly type = REMOVE_USER;
  constructor(public payload: string) {}
}

export type Actions = AddUser | RemoveUser;