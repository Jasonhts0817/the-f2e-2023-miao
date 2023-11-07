import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { AdvocateComponent } from '../../pages/landing-page/advocate/advocate.component';
import { LastestEventComponent } from '../../pages/landing-page/lastest-event/lastest-event.component';
import { PolicyIssueComponent } from '../../pages/landing-page/policy-issue/policy-issue.component';
import { TitleComponent } from '../../shared/title.component';
import { ButtonComponent } from '../../shared/button.component';
import { ChipComponent } from '../../shared/chip.component';
import { IconComponent } from '../../shared/icon.component';

import { PostComponent } from '../../shared/dialogs/post/post.component';
import { DialogComponent } from '../../shared/dialogs/dialog/dialog.component';
import { OtherComponent } from './other/other.component';
import { MainComponent } from './main/main.component';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AdvocateComponent,
    LastestEventComponent,
    PolicyIssueComponent,
    OtherComponent,
    TitleComponent,
    ButtonComponent,
    ChipComponent,
    IconComponent,
    PostComponent,
    DialogComponent,
  ],
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {}
