import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import {
  beginLogin, beginLogout,
  beginRegister,
  getUsers, getUsersSuccess, logoutSuccess
} from './user.action';
import { showAlert } from '../common/app.action';
import { Injectable } from '@angular/core';
import { UserService } from '../../servicies/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../servicies/auth.service';

@Injectable()
export class UserEffects {
  constructor(private action$: Actions, private service: UserService,
              private authService: AuthService, private route: Router) {
  }

  _userRegister = createEffect(() =>
    this.action$.pipe(
      ofType(beginRegister),
      exhaustMap((action) => {
        return this.authService.userRegistration(action.userData).pipe(
          map(() => {
            this.route.navigate(['login'])
            return showAlert({ message: 'Registration successfully.', resultType: 'pass' })
          }),
          catchError((_error) => of(showAlert({ message: 'Registration Failed due to :.' + _error.message, resultType: 'fail' })))
        )
      })
    )
  )

  _userLogin = createEffect(() =>
    this.action$.pipe(
      ofType(beginLogin),
      switchMap((action) => {
        return this.authService.userLogin(action.userCred).pipe(
          switchMap((data) => {
            console.log(data)
            this.service.setUserToLocalStorage(data);
            this.route.navigate(['/sensors'])
            return of(
              showAlert({ message: 'Login success.', resultType: 'pass'}))
          }),
          catchError((_error) => of(showAlert({ message: 'Login Failed due to Bad credentials', resultType: 'fail' })))
        )
      })
    )
  )

  _userLogout = createEffect(() =>
    this.action$.pipe(
      ofType(beginLogout),
      switchMap((action) => {
        return of(logoutSuccess(),
          showAlert({ message: 'Logout success.', resultType: 'pass'}))
      })
    )
  )

  _getAllUsers = createEffect(() =>
    this.action$.pipe(
      ofType(getUsers),
      exhaustMap((action) => {
        return this.service.getAllUsers().pipe(
          map((data) => {
            return getUsersSuccess({ userList: data })
          }),
          catchError((_error) => of(showAlert({ message: 'Failed to fetch user list', resultType: 'fail' })))
        )
      })
    )
  )

}
