import { Component } from '@angular/core';
import { Icon } from '../core/enums/icon.enum';
import { Size } from '../core/enums/size.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  Icon = Icon;
  Size = Size;
}
