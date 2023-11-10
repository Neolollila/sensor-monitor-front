export interface Sensor {
  id: number,
  name: string,
  model: string,
  rangeFrom: number,
  rangeTo: number,
  type: string,
  unit: string,
  location: string,
  description: string
}

export interface TypeModel {
  id: number,
  name: string
}

export interface UnitModel {
  id: number,
  name: string
}

export interface SensorModel{
  list:Sensor[],
  unitList: UnitModel[],
  typeList: TypeModel[],
  sensorObject:Sensor,
  errormessage:string
}
