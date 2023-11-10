import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function creatValueRangeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const fromValue = control.get('rangeFrom')?.value;

    const toValue = control.get('rangeTo')?.value;
    if (fromValue - toValue >= 0) {
      return {numberLessThen: true};
    }

    return null;
  }
}
