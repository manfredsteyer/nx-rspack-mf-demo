import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';

@Component({
  selector: 'lib-auth',
  imports: [CommonModule],
  template: `
  <p>
    User: {{ auth.userName() }}
  </p>
  `,
})
export class AuthComponent {
  auth = inject(AuthService);
}
