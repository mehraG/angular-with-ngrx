import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public users = [];

  constructor(public usrService: UserService) { }

  ngOnInit(): void {
    this.usrService.fetchUsers()
    .subscribe(data =>{
      this.users = data;
      console.log('Users',this.users);
    });
  }

}
