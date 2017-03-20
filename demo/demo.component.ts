import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'tw-demo-app',
  templateUrl: 'demo.component.html'
})
export class DemoComponent {

  private request: any =
  {
    name: '',
    birthdate: '',
    active: true,
  }
  protected form: FormGroup = new FormGroup({});

  private fields: any[] =
  [
    { id: 'name', type: 'text', label: 'USER.NAME' },
    { id: 'birthdate', type: 'datetime', label: 'USER.BIRTHDATE', required: true },
    { id: 'active', type: 'boolean', label: 'USER.ACTIVE' }
  ]



}
