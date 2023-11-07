import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Icon } from 'src/app/core/enums/icon.enum';
import { Size } from 'src/app/core/enums/size.enum';
import { Theme } from 'src/app/core/enums/theme.enum';

@Component({
  selector: 'app-icon',
  template: `
    <img [ngClass]="iconStyle + ' ' + sizeStyle" [src]="iconUrl" [alt]="icon" />
  `,
  standalone: true,
  imports: [CommonModule],
})
export class IconComponent {
  @Input() theme?: Theme;
  @Input() icon?: Icon;
  @Input() size: Size = Size.xs;

  private iconPath = 'assets/icons/';

  public get iconStyle(): string {
    switch (this.theme) {
      case Theme.Primary:
        return 'icon-primary';
      case Theme.Slate:
        return 'icon-slate';
      case Theme.White:
        return 'icon-white';
      default:
        return '';
    }
  }

  public get sizeStyle(): string {
    switch (this.size) {
      case Size.xs:
        return 'h-4 w-4';
      case Size.md:
        return 'h-6 w-6';
      case Size.lg:
        return 'h-7 w-7';
      case Size.xl:
        return 'h-8 w-8';
      default:
        return '';
    }
  }

  public get iconUrl(): string {
    switch (this.icon) {
      case Icon.ArrowBack:
        return `${this.iconPath}/arrow_back.svg`;
      case Icon.ArrowForward:
        return `${this.iconPath}/arrow_forward.svg`;
      case Icon.Donate:
        return `${this.iconPath}/donate.svg`;
      case Icon.Facebook:
        return `${this.iconPath}/facebook.svg`;
      case Icon.Instagram:
        return `${this.iconPath}/instagram.svg`;
      case Icon.Issue:
        return `${this.iconPath}/issue.svg`;
      case Icon.Line:
        return `${this.iconPath}/line.svg`;
      case Icon.Mail:
        return `${this.iconPath}/mail.svg`;
      case Icon.News:
        return `${this.iconPath}/news.svg`;
      case Icon.Twitter:
        return `${this.iconPath}/twitter.svg`;
      case Icon.User:
        return `${this.iconPath}/user.svg`;
      case Icon.Youtube:
        return `${this.iconPath}/youtube.svg`;
      case Icon.Cancel:
        return `${this.iconPath}/cancel.svg`;
      default:
        return '';
    }
  }
}
