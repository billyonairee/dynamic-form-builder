import { Component, OnInit, Input } from '@angular/core';
import { User } from '../shared/models/user';
import { DynamicFormGroup, DynamicFormBuilder } from 'ngx-dynamic-form-builder'
import { Validators } from '@angular/forms';
import { Department } from '../shared/models/department';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {

  @Input()
  strings = User.strings;
  @Input()
  form: DynamicFormGroup<User>;
  @Input()
  item = new User({
    'username': 'admin',
    'isStaff': true,
    'id': 1,
    'isSuperuser': true,
    'dateOfBirth': '1985-05-11',
    'password': 'secretpassword',
    'email': 'admin@site15.ru',
    'department': {
      'id': 2,
      'name': 'department 1'
    }
  })

  fb = new DynamicFormBuilder();
  savedItem: User;

  constructor() {
    this.form = this.fb.group(User, {
      username: '',
      email: '',
      dateOfBirth: ['', Validators.required],
      isSuperuser: false,
      isStaff: false,
      department: this.fb.group(Department, {
        name: ''
      })
    });
  }

  onLoadClick(): void {
    this.savedItem = undefined;
    this.form.object = this.item;
    this.form.validateAllFormFields();
  }

  onClearClick(): void {
    this.savedItem = undefined;
    this.form.object = new User();
    this.form.validateAllFormFields();
  }

  onSaveClick(): void {
    if (this.form.valid) {
      this.savedItem = this.form.object;
    } else {
      this.form.validateAllFormFields()
    }
  }

  ngOnInit() {
  }

}
