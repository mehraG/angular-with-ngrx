// import { Action } from '@ngrx/store';
import { IUser } from './user.model';
import * as UserActions from './user.actions'

const initialState: IUser = {
  id: '0',
  name: 'Anu Meh',
  email: 'ra@meh.co',
  phone: '911'
}

export function UserReducer(state: IUser[] = [initialState], action: UserActions.Actions) {
  switch (action.type) {
    case UserActions.ADD_USER:
      return [...state, action.payload];
    case UserActions.REMOVE_USER:
      return state.filter(user => user.id !== action.payload)
    default:
      return state;

  }
}