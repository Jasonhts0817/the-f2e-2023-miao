import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { DialogComponent } from '../dialog/dialog.component';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { ButtonComponent } from '../../button.component';
import { Theme } from 'src/app/core/enums/theme.enum';
import { Size } from 'src/app/core/enums/size.enum';

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [CommonModule, DialogComponent, ButtonComponent, CurrencyPipe],
  templateUrl: './donate.component.html',
})
export class DonateComponent {
  Theme = Theme;
  Size = Size;
  isSuccess = false;
  donatePlans = [
    {
      title: '喵星人之友',
      price: 600,
      times: 9957,
    },
    {
      title: '喵星大使',
      price: 6000,
      times: 2000,
    },
    {
      title: '喵星傳奇',
      price: 60000,
      times: 999,
    },
  ];
  constructor(
    public dialogRef: DialogRef,
    private dialog: Dialog,
  ) {}
  submit() {
    this.isSuccess = true;
  }
}
