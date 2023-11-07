import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Theme } from 'src/app/core/enums/theme.enum';

@Component({
  selector: 'app-chip',
  template: `
    <span
      class="rounded-full px-3 py-1 text-small text-slate-700 opacity-80"
      [ngClass]="{
        'bg-bg-2': theme === Theme.Primary,
        'bg-[#BEEADB]': theme === Theme.Green,
        'bg-[#FFDDDD]': theme === Theme.Pink
      }"
      ><ng-content></ng-content>
    </span>
  `,
  standalone: true,
  imports: [CommonModule],
})
export class ChipComponent {
  @Input() theme!: Theme;
  Theme = Theme;
}
