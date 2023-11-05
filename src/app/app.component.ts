import { Component } from '@angular/core';
import { Theme } from './core/enums/theme.enum';
import { Icon } from './core/enums/icon.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  Icon = Icon;
  Theme = Theme;
}
