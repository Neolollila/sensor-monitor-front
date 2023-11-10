import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TokenStorageService } from '../../auth/token-storage.service';
import { beginLogout } from '../../store/user/user.action';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements DoCheck, OnInit {
  isMenuVisible = false;
  roles!: string[];
  authority!: string;

  constructor(private router: Router, private store:Store,
              private tokenStorageService:TokenStorageService) {

  }
  ngOnInit(): void {
  }
  ngDoCheck(): void {
    const currentRoute = this.router.url;
    if (currentRoute === '/login' || currentRoute === '/registration') {
      this.isMenuVisible = false
    } else {
      this.isMenuVisible = true;
    }
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.store.dispatch(beginLogout());
    this.router.navigate(['/login'])
  }

}
