import { Component } from '@angular/core';
import { TitleComponent } from 'src/app/shared/title.component';

@Component({
  selector: 'app-advocate',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './advocate.component.html',
})
export class AdvocateComponent {}
