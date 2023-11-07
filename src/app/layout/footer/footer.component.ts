import { Component } from '@angular/core';
import { Icon } from '../../core/enums/icon.enum';
import { Theme } from '../../core/enums/theme.enum';
import { Size } from '../../core/enums/size.enum';
import { IconComponent } from 'src/app/shared/icon.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [IconComponent],
})
export class FooterComponent {
  Icon = Icon;
  Theme = Theme;
  Size = Size;
}
