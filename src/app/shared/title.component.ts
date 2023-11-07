import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <div class="flex flex-col items-center">
      <h6 class="rounded-lg bg-slate-700 p-3 text-h6 text-white">{{ tag }}</h6>
      <h1
        class="text-gradient-primary py-3 font-['MantouSans'] text-2xl-xs xl:text-2xl"
      >
        {{ title }}
      </h1>
    </div>
  `,
  standalone: true,
})
export class TitleComponent {
  @Input('title') title?: string;
  @Input('tag') tag?: string;
}
