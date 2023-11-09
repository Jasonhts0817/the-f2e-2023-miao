import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  standalone: true,
  imports: [CommonModule],
  template: `<span *ngIf="visible" class="text-small text-red-500">{{
    errorMsg
  }}</span> `,
})
export class FormErrorComponent {
  @Input() visible = false;
  @Input() fieldName = '';
  @Input() control?: FormControl;

  public get errorMsg(): string {
    const msgs: string[] = [];
    Object.keys(this.control?.errors ?? {}).map((error) => {
      switch (error) {
        case 'required':
          msgs.push(`請輸入${this.fieldName}`);
          break;
        case 'pattern':
          msgs.push(`請確認${this.fieldName}格式`);
          break;
        case 'email':
          msgs.push(`請確認${this.fieldName}格式`);
          break;
      }
    });
    return msgs.join('、');
  }
}
