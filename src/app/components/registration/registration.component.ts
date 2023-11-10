import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { UserSignIn } from '../../models/user.model';
import { showAlert } from '../../store/common/app.action';
import { Store } from '@ngrx/store';
import { beginRegister } from '../../store/user/user.action';
import { TokenStorageService } from '../../auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
  constructor(private builder: FormBuilder, private store: Store,
              private tokenStorageService:TokenStorageService,
              private router: Router) {
  }

  ngOnInit() {
    if (this.tokenStorageService.getUsername() != undefined) {
      this.router.navigate([''])
    }
  }

  registrationForm = this.builder.group({
    username: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    password: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    confirmPassword: this.builder.control('', Validators.required)
  })

  registration() {
    if (this.registrationForm.valid) {
      if (this.registrationForm.value.password === this.registrationForm.value.confirmPassword) {
        const _userObject: UserSignIn = {
          username: this.registrationForm.value.username as string,
          password: this.registrationForm.value.password as string,
          email: this.registrationForm.value.email as string,
          role: ['VIEWER']
        }
        this.store.dispatch(beginRegister({ userData: _userObject }))

      } else {
        this.store.dispatch(showAlert({ message: 'Password mismatch', resultType: 'fail' }))
      }
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registrationForm.controls;
  }
}
