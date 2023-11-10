import { SensorModel } from '../../models/sensor.model';

export const InitialSensorState: SensorModel = {
  list:[],
  unitList: [],
  typeList: [],
  errormessage:'',
  sensorObject:{
    id: 0,
    name: "",
    model: "",
    rangeFrom: 0,
    rangeTo: 0,
    type: "",
    unit: "",
    location: "",
    description: ""
  }
}
