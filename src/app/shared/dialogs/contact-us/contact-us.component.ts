import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from '../dialog/dialog.component';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { ButtonComponent } from '../../button.component';
import { Theme } from 'src/app/core/enums/theme.enum';
import { Size } from 'src/app/core/enums/size.enum';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, DialogComponent, ButtonComponent],
  templateUrl: './contact-us.component.html',
})
export class ContactUsComponent {
  Theme = Theme;
  Size = Size;
  isSuccess = false;
  constructor(public dialogRef: DialogRef) {}
  submit() {
    this.isSuccess = true;
  }
}
