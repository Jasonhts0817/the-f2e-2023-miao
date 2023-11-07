import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/shared/button.component';
import { Icon } from 'src/app/core/enums/icon.enum';
import { Theme } from 'src/app/core/enums/theme.enum';

@Component({
  selector: 'app-other',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './other.component.html',
})
export class OtherComponent {
  Icon = Icon;
  Theme = Theme;
}
