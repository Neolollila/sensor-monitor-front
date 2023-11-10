import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUsers } from '../../store/user/user.action';
import { MatTableDataSource } from '@angular/material/table';
import { Users } from '../../models/user.model';
import { getUserList } from '../../store/user/user.selectors';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList!: Users[];
  displayedColumns: string[] = ['username', 'email', 'status']
  datasource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(getUsers());
    this.store.select(getUserList).subscribe(item => {
      this.userList = item;
      this.datasource = new MatTableDataSource<Users>(this.userList)
      this.datasource.paginator = this.paginator
      this.datasource.sort = this.sort
    })
  }

}
