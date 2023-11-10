import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SensorModel } from '../../models/sensor.model';

const getSensorState = createFeatureSelector<SensorModel>('sensor');

export const getSensorList = createSelector(getSensorState, (state) => {
  return state.list;
})

export const getSensor = createSelector(getSensorState, (state) => {
  return state.sensorObject;
})

export const getUnitList = createSelector(getSensorState, (state) => {
  return state.unitList
});
export const getTypeList = createSelector(getSensorState, (state) => {
  return state.typeList
});
