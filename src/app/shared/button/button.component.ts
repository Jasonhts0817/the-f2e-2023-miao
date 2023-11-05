import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Theme } from 'src/app/core/enums/theme.enum';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() theme!: Theme;
  @Input() icon?: 'arrow_forward';

  public get iconStyle(): string {
    switch (this.theme) {
      case 'primary':
        return 'icon-white text-white';
      case 'slate':
        return 'icon-slate text-slate-700';
      default:
        return '';
    }
  }
}
