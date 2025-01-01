import { Component } from '@angular/core';
import { AuthComponent } from './auth.component';

@Component({
  selector: 'lib-auth-wrapper',
  imports: [AuthComponent],
  template: `
    <lib-auth>
  `,
})
export class AuthWrapperComponent {
}
