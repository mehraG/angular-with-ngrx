import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from './store/app.state';
import { IUser } from './store/user.model';
import * as UserActions from './store/user.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: [
  ]
})
export class CreateComponent implements OnInit {

  newUser: IUser = { id: '', name: '', email: '', phone: '' };

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {}

  addUser() {
    if (this.newUser.id === '' ||
      this.newUser.name === '' ||
      this.newUser.email === '' ||
      this.newUser.phone=== ''
    ) { alert("Please Fill all Entries"); console.log('not saved'); }
    else {
      this.store.dispatch(new UserActions.AddUser(this.newUser));
      this.newUser = { id: '', name: '', email: '', phone: '' }; // to reset form
    }
  }


}
