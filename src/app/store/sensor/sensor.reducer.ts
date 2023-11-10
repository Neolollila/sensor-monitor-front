import { createReducer, on } from '@ngrx/store';
import { InitialSensorState } from './sensor.state';
import {
  addSensorSuccess, deleteSensorSuccess,
  getSensorSuccess, getTypesSuccess, getUnitsSuccess,
  loadSensorFail,
  loadSensorSuccess,
  updateSensorSuccess
} from './sensor.action';

const _SensorReducer = createReducer(InitialSensorState,
  on(loadSensorSuccess, (state, action) => {
    return {
      ...state,
      list: [...action.list],
      errormessage: ''
    };
  }),
  on(getSensorSuccess, (state, action) => {
    return {
      ...state,
      sensorObject: action.object,
      errormessage: ''
    };
  }),
  on(loadSensorFail, (state, action) => {
    return {
      ...state,
      list: [],
      errormessage: action.errormessage
    };
  }),
  on(addSensorSuccess, (state, action) => {
    const _newData = {...action.inputData};
    return {
      ...state,
      list: [...state.list, _newData],
      errormessage: ''
    };
  }),
  on(updateSensorSuccess, (state, action) => {
    const _newData = state.list.map(o => {
      return o.id === action.inputData.id ? action.inputData : o;
    });
    return {
      ...state,
      list: _newData,
      errormessage: ''
    };
  }),
  on(deleteSensorSuccess, (state, action) => {
    const _newData = state.list.filter(o => o.id !== action.id);
    return {
      ...state,
      list: _newData,
      errormessage: ''
    };
  }),
  on(getUnitsSuccess, (state, action) => {
    return { ...state, unitList: action.unitList }
  }),
  on(getTypesSuccess, (state, action) => {
    return { ...state, typeList: action.typeList }
  })
);

export function SensorReducer(state: any, action: any) {
  return _SensorReducer(state, action);
}
