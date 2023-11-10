import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { beginLogin } from '../../store/user/user.action';
import { UserCred } from '../../models/user.model';
import { TokenStorageService } from '../../auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(private builder: FormBuilder, private store: Store, private router:Router,
              private tokenStorageService:TokenStorageService) {

  }
  ngOnInit(): void {
    if (this.tokenStorageService.getUsername() != '') {
      this.router.navigate([''])
    }
  }

  loginForm = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  })

  proceedLogin() {
    if (this.loginForm.valid) {
      const _obj: UserCred = {
        username: this.loginForm.value.username as string,
        password: this.loginForm.value.password as string
      }
      this.store.dispatch(beginLogin({ userCred: _obj }))
    }
  }

  resetLogin() {
    window.location.reload();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
}
