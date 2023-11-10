import { Component, OnInit, ViewChild } from '@angular/core';
import {Sensor} from '../../models/sensor.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { deleteSensor, loadSensor } from '../../store/sensor/sensor.action';
import { getSensorList } from '../../store/sensor/sensor.selectors';
import { MatTableDataSource } from '@angular/material/table';
import { RoleEnum, UserInfo } from '../../models/user.model';
import { UserService } from '../../servicies/user.service';
import { TokenStorageService } from '../../auth/token-storage.service';

@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.scss']
})
export class SensorListComponent implements OnInit{
  sensors!: Sensor[];
  dataSource: any;
  searchText = '';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = this.getRoleCurrentUser() ? ['name', 'model', 'range', 'type', 'unit', 'location', 'action'] : ['name', 'model', 'range', 'type', 'unit', 'location'];

  constructor(private dialog: MatDialog, private store: Store, private userService: UserService,
              private tokenStorageService:TokenStorageService) {
  }
  ngOnInit() {
    this.store.dispatch(loadSensor());
    this.store.select(getSensorList).subscribe(item => {
      this.sensors = item;
      this.dataSource = new MatTableDataSource<Sensor>(this.sensors);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  delete(sensor: Sensor){
    if(confirm('do you want to remove?')){
      this.store.dispatch(deleteSensor({id: sensor.id}));
    }
  }

  applyFilter() {
    this.dataSource.filter = this.searchText.trim().toLowerCase();
  }

  getRoleCurrentUser(): boolean {
    const authorities = this.tokenStorageService.getAuthorities();
    return authorities[0] == RoleEnum.ADMINISTRATOR;
  }
}
