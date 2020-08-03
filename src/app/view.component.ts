import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IUser } from './store/user.model';
import { AppState } from './store/app.state';
import * as UserActions from './store/user.actions';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styles: [
  ]
})
export class ViewComponent implements OnInit {
  userList$: Observable<IUser[]>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.userList$ = this.store.select(store => store.user.userList);
    this.loading$ = this.store.select(store => store.user.loading);
    this.error$ = this.store.select(store => store.user.error);

    this.store.dispatch(new UserActions.FetchUser());
  }

  delUser(id: string) {
    this.store.dispatch(new UserActions.RemoveUser(id));
  }

}
