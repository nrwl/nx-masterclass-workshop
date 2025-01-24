import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppShellComponent } from './app-shell/app-shell.component';
// import { sendNotification } from '../../../../libs/api/api-util-notificationss'

@Component({
  standalone: true,
  imports: [RouterOutlet, AppShellComponent],
  selector: 'ens-root',
  template: `
    <app-shell>
      <router-outlet />
    </app-shell>
  `,
})
export class AppComponent {
  title = 'movies';
}
