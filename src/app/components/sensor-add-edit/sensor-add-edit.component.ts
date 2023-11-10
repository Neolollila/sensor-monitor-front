import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Sensor, TypeModel, UnitModel } from '../../models/sensor.model';
import { addSensor, getSensorById, getTypes, getUnits, updateSensor } from '../../store/sensor/sensor.action';
import { getSensor, getTypeList, getUnitList } from '../../store/sensor/sensor.selectors';
import { creatValueRangeValidator } from '../../validation/range.validation';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sensor-add-edit',
  templateUrl: './sensor-add-edit.component.html',
  styleUrls: ['./sensor-add-edit.component.scss']
})
export class SensorAddEditComponent implements OnInit{
  title = 'Add/Edit'
  units!: UnitModel[];
  types!: TypeModel[];
  sensorId: number | undefined;
  @Input() isEdit!: boolean;

  constructor(private builder: FormBuilder, private store: Store,
              private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit(): void {
    this.store.dispatch(getUnits());
    this.store.dispatch(getTypes());
    this.store.select(getUnitList).subscribe(item => {
      this.units = item;
    });
    this.store.select(getTypeList).subscribe(item => {
      this.types = item;
    });
    this.sensorId = this.route.snapshot.params['id'];

    if (this.sensorId !=undefined || this.sensorId != null) {
      this.store.dispatch(getSensorById({id:this.sensorId}))
      this.store.select(getSensor).subscribe(res => {
        this.sensorForm.setValue({
          id: res.id, name: res.name, model: res.model, rangeFrom: res.rangeFrom,
          rangeTo: res.rangeTo, type: res.type, unit: res.unit, location: res.location, description: res.description
        })
      })
    }
  }

  sensorForm = this.builder.group({
    id: this.builder.control(0),
    name: this.builder.control('', Validators.compose([Validators.required, Validators.maxLength(30)]) ),
    model: this.builder.control('', Validators.compose([Validators.required, Validators.maxLength(15)]) ),
    rangeFrom: this.builder.control(0, Validators.required),
    rangeTo: this.builder.control(1, Validators.required),
    type: this.builder.control('', Validators.required),
    unit: this.builder.control('', Validators.required),
    location: this.builder.control('', Validators.maxLength(40) ),
    description: this.builder.control('', Validators.maxLength(200))
  }, { validator: creatValueRangeValidator() })

  saveSensor() {
    if (this.sensorForm.valid) {
      console.log(1)
      const _obj: Sensor = {
        id: this.sensorForm.value.id as number,
        name: this.sensorForm.value.name as string,
        model: this.sensorForm.value.model as string,
        rangeFrom: this.sensorForm.value.rangeFrom as number,
        rangeTo: this.sensorForm.value.rangeTo as number,
        type: this.sensorForm.value.type as string,
        unit: this.sensorForm.value.unit as string,
        location: this.sensorForm.value.location as string,
        description: this.sensorForm.value.description as string
      }
      if (_obj.id === 0) {
        console.log(2)
        this.store.dispatch(addSensor({ inputData: _obj }))
      } else {
        console.log(3)
        this.store.dispatch(updateSensor({ inputData: _obj }))
      }
      console.log(4)
      this.returnToSensors();
    }
  }

  returnToSensors() {
    this.router.navigate(['/sensors']);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.sensorForm.controls;
  }
}
