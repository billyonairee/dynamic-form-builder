import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>{{title}}</h2>
    <app-user-panel></app-user-panel>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-dynamic-form-builder';
}
