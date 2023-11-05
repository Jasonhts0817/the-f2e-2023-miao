import { Component, Input } from '@angular/core';
import { Theme } from 'src/app/core/enums/theme.enum';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
})
export class ChipComponent {
  @Input() theme!: Theme;
  Theme = Theme;
}
