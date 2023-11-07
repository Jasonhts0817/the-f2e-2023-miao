import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from '../dialog/dialog.component';
import { Dialog, DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, DialogComponent],
  templateUrl: './contact-us.component.html',
})
export class ContactUsComponent {
  constructor(
    public dialogRef: DialogRef,
    private dialog: Dialog,
  ) {}
}
