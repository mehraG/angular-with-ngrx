// import { Action } from '@ngrx/store';
import { IUser } from './user.model';
import * as UserActions from './user.actions'

export interface UserState {
  userList: IUser[],
  loading: boolean,
  error: Error
}

const initialState: UserState = {
  userList: [],
  loading: false,
  error: undefined
}

export function UserReducer(state: UserState = initialState, action: UserActions.Actions) {
  switch (action.type) {
    case UserActions.FETCH_USER:
      return { ...state, loading: true };
    case UserActions.FETCH_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case UserActions.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userList: action.payload
      };
    case UserActions.ADD_USER:
      return { ...state, loading: true };
    case UserActions.ADD_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case UserActions.ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userList: [...state.userList, action.payload]
      };
    case UserActions.REMOVE_USER:
      return { ...state, loading: true };
    case UserActions.REMOVE_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case UserActions.REMOVE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userList: state.userList.filter(item => item.id !== action.payload)
      };
    default:
      return state;

  }
}