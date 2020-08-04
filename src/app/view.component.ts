import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IUser } from './store/user.model';
import { AppState } from './store/app.state';
import * as UserActions from './store/user.actions';
import { UpdateModalComponent } from './modals/update-modal.component';
import { ViewModalComponent } from './modals/view-modal.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styles: [
  ]
})
export class ViewComponent implements OnInit {
  userList$: Observable<IUser[]>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;

  constructor(private store: Store<AppState>, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.userList$ = this.store.select(store => store.user.userList);
    this.loading$ = this.store.select(store => store.user.loading);
    this.error$ = this.store.select(store => store.user.error);

    this.store.dispatch(new UserActions.FetchUser());
  }

  delUser(id: string) {
    this.store.dispatch(new UserActions.RemoveUser(id));
  }

  openEditModal(user: IUser) {
    const modalRef = this.modalService.open(UpdateModalComponent);

    let data = user;

    modalRef.componentInstance.fromParent = data;
    modalRef.result.then(
      (result) => { result == 'Data Updated!' ? console.log(result) : null; },
      (reason) => { }
    );
  }

  openViewModal(user: IUser) {
    const modalRef = this.modalService.open(ViewModalComponent);

    let data = user;

    modalRef.componentInstance.fromParent = data;
    modalRef.result.then(result => console.log(result));
  }

}
