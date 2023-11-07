import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Icon } from 'src/app/core/enums/icon.enum';
import { Theme } from 'src/app/core/enums/theme.enum';
import { IconComponent } from './icon.component';

@Component({
  selector: 'app-button',
  template: `
    <a
      class="inline-flex cursor-pointer items-center gap-2 rounded-[500px] px-6 py-4"
      [ngClass]="buttonTheme?.bg"
    >
      <h6 class="text-h6" [ngClass]="buttonTheme?.text">
        <ng-content></ng-content>
      </h6>
      <app-icon [theme]="buttonTheme?.icon" [icon]="icon"></app-icon>
    </a>
  `,
  standalone: true,
  imports: [CommonModule, IconComponent],
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
      case Theme.White:
        return { text: 'text-slate-700', bg: 'bg-white', icon: Theme.Slate };
      default:
        return undefined;
    }
  }
}
