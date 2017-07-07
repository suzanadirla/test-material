import {Component} from '@angular/core';

import {DisplayMessages} from './shared/display-messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = DisplayMessages.APP_TITLE;
  subtitle: string = DisplayMessages.APP_SUBTITLE;
}
