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

  users$: Observable<IUser[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.users$ = this.store.select('user');
  }

  delUser(id: string) {
    this.store.dispatch(new UserActions.RemoveUser(id));
  }

}
