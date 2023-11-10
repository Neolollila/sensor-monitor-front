import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SensorService } from '../../servicies/sensor.service';
import {
  addSensor, addSensorSuccess,
  deleteSensor, deleteSensorSuccess, getSensorById, getSensorSuccess, getTypes, getTypesSuccess, getUnits, getUnitsSuccess,
  loadSensor,
  loadSensorFail,
  loadSensorSuccess,
  updateSensor,
  updateSensorSuccess
} from './sensor.action';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import { showAlert } from '../common/app.action';

@Injectable()
export class SensorEffects {
  constructor(private action$: Actions, private service: SensorService) {

  }

  _loadSensor = createEffect(() =>
    this.action$.pipe(
      ofType(loadSensor),
      exhaustMap((action) => {
        return this.service.getSensors().pipe(
          map((data) => {
            return loadSensorSuccess({list: data})
          }),
          catchError((_error) => of(loadSensorFail({errormessage: _error.message})))
        )
      })
    )
  )

  _getSensor = createEffect(() =>
    this.action$.pipe(
      ofType(getSensorById),
      exhaustMap((action) => {
        return this.service.getSensor(action.id).pipe(
          map((data) => {
            return getSensorSuccess({object: data})
          }),
          catchError((_error) => of(showAlert({
            message: 'Failed to fetch data :' + _error.message,
            resultType: 'fail'
          })))
        )
      })
    )
  )

  _addSensor = createEffect(() =>
    this.action$.pipe(
      ofType(addSensor),
      switchMap((action) => {
        return this.service.addSensor(action.inputData).pipe(
          switchMap((data) => {
            return of(addSensorSuccess({inputData: action.inputData}),
              showAlert({message: 'Created successfully.', resultType: 'pass'}))
          }),
          catchError((_error) => of(showAlert({message: 'Failed to create sensor', resultType: 'fail'})))
        )
      })
    )
  )
  _updateSensor = createEffect(() =>
    this.action$.pipe(
      ofType(updateSensor),
      switchMap((action) => {
        return this.service.updateSensor(action.inputData).pipe(
          switchMap((data) => {
            return of(updateSensorSuccess({inputData: action.inputData}),
              showAlert({message: 'Updated successfully.', resultType: 'pass'}))
          }),
          catchError((_error) => of(showAlert({message: 'Failed to update sensor', resultType: 'fail'})))
        )
      })
    )
  )
  _deleteSensor = createEffect(() =>
    this.action$.pipe(
      ofType(deleteSensor),
      switchMap((action) => {
        console.log(action)
        return this.service.deleteSensor(action.id).pipe(
          switchMap((data) => {
            return of(deleteSensorSuccess({id: action.id}),
              showAlert({message: 'Deleted successfully.', resultType: 'pass'}))
          }),
          catchError((_error) => of(showAlert({message: 'Failed to delete sensor', resultType: 'fail'})))
        )
      })
    )
  )

  _getUnits = createEffect(() =>
    this.action$.pipe(
      ofType(getUnits),
      exhaustMap((action) => {
        return this.service.getUnits().pipe(
          map((data) => {
            return getUnitsSuccess({ unitList: data })
          }),
          catchError((_error) => of(showAlert({ message: 'Failed to fetch user list', resultType: 'fail' })))
        )
      })
    )
  )

  _getTypes = createEffect(() =>
    this.action$.pipe(
      ofType(getTypes),
      exhaustMap((action) => {
        return this.service.getTypes().pipe(
          map((data) => {
            return getTypesSuccess({ typeList: data })
          }),
          catchError((_error) => of(showAlert({ message: 'Failed to fetch user list', resultType: 'fail' })))
        )
      })
    )
  )
}
