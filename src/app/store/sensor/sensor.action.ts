import { createAction, props } from '@ngrx/store';
import { Sensor, TypeModel } from '../../models/sensor.model';

export const LOAD_SENSOR='[SENSOR PAGE] load sensor'
export const LOAD_SENSOR_SUCCESS='[SENSOR PAGE]load sensor success'
export const LOAD_SENSOR_FAIL='[SENSOR PAGE] load sensor fail'

export const ADD_SENSOR='[SENSOR PAGE] add SENSOR'
export const ADD_SENSOR_SUCCESS='[SENSOR PAGE] add sensor success'

export const UPDATE_SENSOR='[SENSOR PAGE] update sensor'
export const UPDATE_SENSOR_SUCCESS='[SENSOR PAGE] update sensor success'

export const DELETE_SENSOR='[SENSOR PAGE] delete sensor'
export const DELETE_SENSOR_SUCCESS='[SENSOR PAGE] delete sensor success'

export const GET_SENSOR='[SENSOR PAGE] get sensor'
export const GET_SENSOR_SUCCESS='[SENSOR PAGE] get sensor success'

export const GET_UNITS='[SENSOR PAGE] get units'
export const GET_UNITS_SUCCESS='[SENSOR PAGE] get units success'

export const GET_TYPES='[SENSOR PAGE] get types'
export const GET_TYPES_SUCCESS='[SENSOR PAGE] get types success'


export const loadSensor=createAction(LOAD_SENSOR)
export const loadSensorSuccess=createAction(LOAD_SENSOR_SUCCESS,props<{list:Sensor[]}>())
export const loadSensorFail=createAction(LOAD_SENSOR_FAIL,props<{errormessage:string}>())

export const addSensor=createAction(ADD_SENSOR,props<{inputData:Sensor}>())
export const addSensorSuccess=createAction(ADD_SENSOR_SUCCESS,props<{inputData:Sensor}>())

export const updateSensor=createAction(UPDATE_SENSOR,props<{inputData:Sensor}>())
export const updateSensorSuccess=createAction(UPDATE_SENSOR_SUCCESS,props<{inputData:Sensor}>())

export const deleteSensor=createAction(DELETE_SENSOR,props<{id:number}>())
export const deleteSensorSuccess=createAction(DELETE_SENSOR_SUCCESS,props<{id:number}>())

export const getSensorById=createAction(GET_SENSOR,props<{id:number}>())
export const getSensorSuccess=createAction(GET_SENSOR_SUCCESS,props<{object:Sensor}>())

export const getUnits=createAction(GET_UNITS)
export const getUnitsSuccess=createAction(GET_UNITS_SUCCESS,props<{unitList:TypeModel[]}>())

export const getTypes=createAction(GET_TYPES)
export const getTypesSuccess=createAction(GET_TYPES_SUCCESS,props<{typeList:TypeModel[]}>())
