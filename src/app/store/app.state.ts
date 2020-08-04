import { UserState } from './user.reducer';

export interface AppState {
  readonly user: UserState;
}