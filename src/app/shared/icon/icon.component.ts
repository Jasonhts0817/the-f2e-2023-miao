import { Component, Input } from '@angular/core';
import { Icon } from 'src/app/core/enums/icon.enum';
import { Theme } from 'src/app/core/enums/theme.enum';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
})
export class IconComponent {
  @Input() theme?: Theme;
  @Input() icon?: Icon;

  private iconPath = 'assets/icons/';

  public get iconStyle(): string {
    switch (this.theme) {
      case 'primary':
        return 'icon-primary';
      case 'slate':
        return 'icon-slate';
      case 'white':
        return 'icon-white';
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
      default:
        return '';
    }
  }
}
