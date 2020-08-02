import { IUser } from './user.model';

export interface AppState {
  readonly user: IUser[];
}