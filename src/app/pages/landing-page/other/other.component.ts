import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/shared/button.component';
import { Icon } from 'src/app/core/enums/icon.enum';
import { Theme } from 'src/app/core/enums/theme.enum';
import { Dialog } from '@angular/cdk/dialog';
import { DonateComponent } from 'src/app/shared/dialogs/donate/donate.component';
import { ContactUsComponent } from 'src/app/shared/dialogs/contact-us/contact-us.component';
import { Size } from 'src/app/core/enums/size.enum';

@Component({
  selector: 'app-other',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './other.component.html',
})
export class OtherComponent {
  Icon = Icon;
  Theme = Theme;
  Size = Size;

  constructor(private dialog: Dialog) {}

  openDonateDialog() {
    this.dialog.open(DonateComponent);
  }

  openContactUsialog() {
    this.dialog.open(ContactUsComponent);
  }
}
