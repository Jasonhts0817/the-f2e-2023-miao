import { Component } from '@angular/core';
import { Icon } from '../../core/enums/icon.enum';
import { Size } from '../../core/enums/size.enum';
import { IconComponent } from 'src/app/shared/icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, IconComponent],
})
export class HeaderComponent {
  Icon = Icon;
  Size = Size;
}
