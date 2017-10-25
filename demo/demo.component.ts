import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { FormField, IFormField } from '../src/reactive-form/form-field.model'
import { TreeviewItem } from 'ng2-dropdown-treeview';
import * as moment from 'moment'
@Component({
  selector: 'tw-demo-app',
  templateUrl: 'demo.component.html'
})
export class DemoComponent {

  form: FormGroup = new FormGroup({});

  selectValues: any[] =
  [
    { id: 'FirstValue', label: 'First Value' },
    { id: 'SecondValue', label: 'Second Value' }
  ]

  request: any = {
    time: '10:30', 'treeviewradio': 921
  }


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
        {
          id: 'Group3SecondValue', label: '-- Second Value',
          values: [
            { id: 'Group3SecondValue-1', label: '-- Second-First Value' },
            { id: 'Group3SecondValue-2', label: '-- Second-Second Value' }
          ]
        }
      ]
    }
  ]


  fields: FormField[]
  constructor() {

    this.fields = [
      new FormField(<IFormField>{ id: 'multiselect', type: 'multiselect', label: 'Multi Select', options: this.selectValues, optionValue: 'id', optionText: 'label', more: { all: true, allText: 'All' } }),
      new FormField(<IFormField>{ id: 'text', type: 'text', label: 'Input Text', more: { nullable: true } }),
      new FormField(<IFormField>{ id: 'number', type: 'number', label: 'Input Number' }),
      new FormField(<IFormField>{ id: 'email', type: 'email', label: 'Input Email' }),
      new FormField(<IFormField>{ id: 'hidden', type: 'hidden', label: 'Input Hidden (Set label to \'\')' }),
      new FormField(<IFormField>{ id: 'float', type: 'float', label: 'Input Float' }),
      new FormField(<IFormField>{ id: 'textarea', type: 'textarea', label: 'Textarea' }),
      new FormField(<IFormField>{ id: 'datetime', type: 'datetime', label: 'Datetime From', more: { defaultValue: 'startOfDay' } }).required(),
      new FormField(<IFormField>{ id: 'datetime2', type: 'datetime', label: 'Datetime To', more: { defaultValue: 'endOfDay', options: { maxDate: moment().add(-1, 'days') } } }).required(),
      new FormField(<IFormField>{ id: 'datetimerange', type: 'daterange', label: 'Date Range', more: { defaultValue1: 'startOfDay', defaultValue2: 'endOfDay', model1: 'dateRangeFrom', model2: 'dateRangeTo' } }).required(),
      new FormField(<IFormField>{ id: 'time', type: 'time', label: 'Time', more: { defaultValue: 'startOfDay' } }),
      new FormField(<IFormField>{ id: 'date', type: 'date', label: 'Date' }),
      new FormField(<IFormField>{ id: 'switch', type: 'boolean', label: 'Switch' }),
      new FormField(<IFormField>{ id: 'daysOfWeek', type: 'daysOfWeek', label: 'Days Of Week' }),
      new FormField(<IFormField>{ id: 'select', type: 'select', label: 'Select', options: this.selectValues, optionValue: 'id', optionText: 'label' }),
      new FormField(<IFormField>{ id: 'enumselect', type: 'enumselect', label: 'Enum Select', options: EnumValues, optionValue: '', optionText: '' }),
      new FormField(<IFormField>{ id: 'enummultiselect', type: 'enummultiselect', label: 'Enum Multi Select', options: EnumValues, optionValue: '', optionText: '' }),
      new FormField(<IFormField>{ id: 'groupselect', type: 'groupselect', label: 'Group Select', options: this.groupSelect, optionValue: 'id', optionText: 'label' }),
      new FormField(<IFormField>{ id: 'treeview', type: 'treeview-txt', label: 'Treeview Select', options: this.createCategoriesTree(), optionValue: '', optionText: '' }),
      new FormField(<IFormField>{ id: 'treeviewradio', type: 'treeview-radio', label: 'Treeview Radio', options: this.createCategoriesTree(), optionValue: '', optionText: '' }),
    ]

  }

  private createCategoriesTree(): TreeviewItem[] {
    let childrenCategory: TreeviewItem = new TreeviewItem({
      text: 'Children', value: 1, collapsed: true, children: [
        { text: 'Baby 3-5', value: 11 },
        { text: 'Baby 6-8', value: 12 },
        { text: 'Baby 9-12', value: 13 }
      ]
    });
    let itCategory: TreeviewItem = new TreeviewItem({
      text: 'IT', value: 9, children: [
        {
          text: 'Programming', value: 91, children: [
            { text: 'Angular 1', value: 911 },
            { text: 'Angular 2', value: 912 },
            { text: 'ReactJS', value: 913 }
          ]
        },
        {
          text: 'Networking', value: 92, children: [
            { text: 'Internet', value: 921 },
            { text: 'Security', value: 922 }
          ]
        }
      ]
    });
    let teenCategory: TreeviewItem = new TreeviewItem({
      text: 'Teen', value: 2, collapsed: true, disabled: true, children: [
        { text: 'Adventure', value: 21 },
        { text: 'Science', value: 22 }
      ]
    });
    let othersCategory: TreeviewItem = new TreeviewItem({ text: 'Others', value: 3, collapsed: true, disabled: true });
    return [childrenCategory, itCategory, teenCategory, othersCategory];
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



