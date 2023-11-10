import { exhaustMap, map } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { emptyAction, showAlert } from './app.action';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable()
export class AppEffects {
  constructor(private $action: Actions, private _snackbar: MatSnackBar) {

  }

  _showAlert = createEffect(() =>
    this.$action.pipe(
      ofType(showAlert),
      exhaustMap((action) => {
        return this.showNackBarAlert(action.message, action.resultType).afterDismissed().pipe(
          map(() => {
            return emptyAction();
          })
        )
      })
    )
  )

  showNackBarAlert(message: string, resultType: string = 'fail') {
    let _class = resultType == 'pass' ? 'green-snackbar' : 'red-snackbar'
    return this._snackbar.open(message, 'OK', {
      verticalPosition: 'top',
      horizontalPosition: 'end',
      duration: 5000,
      panelClass: [_class]
    })
  }

}
