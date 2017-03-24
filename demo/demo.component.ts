import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { FormField, IFormField } from '../src/reactive-form/form-field.model'

@Component({
  selector: 'tw-demo-app',
  templateUrl: 'demo.component.html'
})
export class DemoComponent {

  form: FormGroup = new FormGroup({});
  request: any = {}

  selectValues: any[] =
  [
    { id: 'FirstValue', label: 'First Value' },
    { id: 'SecondValue', label: 'Second Value' }
  ]

  groupSelect: any[] =
  [
    {
      label: 'Group1',
      values: [
        { id: 'Group1FirstValue', label: '-- First Value' },
        { id: 'Group1SecondValue', label: '-- Second Value' }
      ]
    },
    {
      label: 'Group2',
      values: [
        { id: 'Group2FirstValue', label: '-- First Value' },
        { id: 'Group2SecondValue', label: '-- Second Value' }
      ]
    },
    {
      label: 'Group3',
      values: [
        { id: 'Group3FirstValue', label: '-- First Value' },
        { id: 'Group3SecondValue', label: '-- Second Value' }
      ]
    }
  ]

  fields: FormField[]
  constructor() {

    this.fields = [
      new FormField(<IFormField>{ id: 'text', type: 'text', label: 'Input Text' }),
      new FormField(<IFormField>{ id: 'number', type: 'number', label: 'Input Number' }),
      new FormField(<IFormField>{ id: 'email', type: 'email', label: 'Input Email' }),
      new FormField(<IFormField>{ id: 'hidden', type: 'hidden', label: 'Input Hidden (Set label to \'\')' }),
      new FormField(<IFormField>{ id: 'float', type: 'float', label: 'Input Float' }),
      new FormField(<IFormField>{ id: 'textarea', type: 'textarea', label: 'Textarea' }),
      new FormField(<IFormField>{ id: 'datetime', type: 'datetime', label: 'Datetime' }).required(),
      new FormField(<IFormField>{ id: 'time', type: 'time', label: 'Time' }),
      new FormField(<IFormField>{ id: 'date', type: 'date', label: 'Date' }),
      new FormField(<IFormField>{ id: 'switch', type: 'boolean', label: 'Switch' }),
      new FormField(<IFormField>{ id: 'daysOfWeek', type: 'daysOfWeek', label: 'Days Of Week' }),
      new FormField(<IFormField>{ id: 'select', type: 'select', label: 'Select', options: this.selectValues, optionValue: 'id', optionText: 'label' }),
      new FormField(<IFormField>{ id: 'multiselect', type: 'multiselect', label: 'Multi Select', options: this.selectValues, optionValue: 'id', optionText: 'label' }),
      new FormField(<IFormField>{ id: 'enumselect', type: 'enumselect', label: 'Enum Select', options: EnumValues, optionValue: '', optionText: '' }),
      new FormField(<IFormField>{ id: 'groupselect', type: 'groupselect', label: 'Group Select', options: this.groupSelect, optionValue: 'id', optionText: 'label' }),
    ]



  }
  // [
  // { id: 'text', type: 'text', label: 'Input Text' },
  // { id: 'number', type: 'number', label: 'Input Number' },
  // { id: 'email', type: 'email', label: 'Input Email' },
  // { id: 'hidden', type: 'hidden', label: 'Input Hidden (Set label to \'\')' },
  // { id: 'float', type: 'float', label: 'Input Float' },
  // { id: 'textarea', type: 'textarea', label: 'Textarea' },
  // { id: 'datetime', type: 'datetime', label: 'Datetime', required: true },
  // { id: 'time', type: 'time', label: 'Time' },
  // { id: 'date', type: 'date', label: 'Date' },
  // { id: 'switch', type: 'boolean', label: 'Switch' },
  // { id: 'daysOfWeek', type: 'daysOfWeek', label: 'Days Of Week' },
  // { id: 'select', type: 'select', label: 'Select', options: this.selectValues, optionValue: 'id', optionText: 'label' },
  // { id: 'multiselect', type: 'multiselect', label: 'Multi Select', options: this.selectValues, optionValue: 'id', optionText: 'label' },
  // { id: 'enumselect', type: 'enumselect', label: 'Enum Select', options: EnumValues, optionValue: '', optionText: '' },
  // { id: 'groupselect', type: 'groupselect', label: 'Group Select', options: this.groupSelect, optionValue: 'id', optionText: 'label' },
  // ]


}

export enum EnumValues {

  'None',
  'FirstValue',
  'SecondValue',
}



