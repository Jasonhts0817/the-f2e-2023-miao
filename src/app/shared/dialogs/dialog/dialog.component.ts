import { DialogRef } from '@angular/cdk/dialog';
import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Icon } from 'src/app/core/enums/icon.enum';
import { Size } from 'src/app/core/enums/size.enum';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnChanges {
  @Input() dialogRef!: DialogRef;
  @Input() title: string = '';
  Icon = Icon;
  Size = Size;
  constructor(private ref: ElementRef<HTMLDivElement>) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dialogRef']) {
      this.dialogRef.disableClose = true;
      this.dialogRef.backdropClick.subscribe(() => this.closeDialog());
    }
  }

  closeDialog() {
    this.ref.nativeElement.firstElementChild?.classList.remove(
      'animate-fadeInUp',
    );
    this.ref.nativeElement.firstElementChild?.classList.add(
      'animate-fadeOutDown',
    );
    setTimeout(() => this.dialogRef.close(), 500);
  }
}
