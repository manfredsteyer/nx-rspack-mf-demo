import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthComponent, AuthService, AuthWrapperComponent } from '@rspack-demo/auth';

@Component({
  imports: [RouterModule, AuthComponent, AuthWrapperComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myapp';

  auth = inject(AuthService);

  search(): void {
    alert('Not implemented!');
  }
}

export default AppComponent;
