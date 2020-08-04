import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';

import { AppState } from '../store/app.state';
import { IUser } from './../store/user.model';
import * as UserActions from '../store/user.actions';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styles: [
  ]
})
export class UpdateModalComponent implements OnInit {

  @Input() fromParent;
  userDetails:IUser;
  
  

  constructor(public activeModal:NgbActiveModal,private store: Store<AppState>) { }

  ngOnInit(): void {
    this.userDetails = Object.assign({}, this.fromParent); // cloning the data
  }

  closeModal(sendData) {
    if(sendData!=='Data Updated!') this.activeModal.close(sendData);
    else if (
      this.userDetails.name === '' ||
      this.userDetails.email === '' ||
      this.userDetails.phone=== ''
    ) { alert("Please Fill all Entries"); console.log('not updated'); }
    else {
      this.activeModal.close(sendData);
      if(sendData=='Data Updated!') this.store.dispatch(new UserActions.UpdateUser(this.userDetails));
    }
    
  }

}
