import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-modal',
  templateUrl: './view-modal.component.html',
  styles: [
  ]
})
export class ViewModalComponent implements OnInit {

  @Input() fromParent;

  constructor(public activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }

  closeModal(sendData) {
    this.activeModal.close(sendData);
  }

}
