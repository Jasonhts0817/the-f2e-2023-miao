import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Icon } from 'src/app/core/enums/icon.enum';
import { Theme } from 'src/app/core/enums/theme.enum';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() theme!: Theme;
  @Input() icon?: Icon;

  get buttonTheme() {
    switch (this.theme) {
      case Theme.Slate:
        return { text: 'text-slate-700', bg: 'bg-gray-100', icon: Theme.Slate };
      case Theme.Primary:
        return { text: 'text-white', bg: 'bg-primary', icon: Theme.White };
      default:
        return undefined;
    }
  }
}
