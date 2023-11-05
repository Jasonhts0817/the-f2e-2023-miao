import { Component } from '@angular/core';
import { Icon } from '../core/enums/icon.enum';
import { Theme } from '../core/enums/theme.enum';
import { Size } from '../core/enums/size.enum';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  Icon = Icon;
  Theme = Theme;
  Size = Size;
}
