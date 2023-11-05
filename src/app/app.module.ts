import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { register } from 'swiper/element';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdvocateComponent } from './advocate/advocate.component';
import { LastestEventComponent } from './lastest-event/lastest-event.component';
import { PolicyIssueComponent } from './policy-issue/policy-issue.component';
import { TitleComponent } from './shared/title/title.component';
import { ButtonComponent } from './shared/button/button.component';
import { ChipComponent } from './shared/chip/chip.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdvocateComponent,
    LastestEventComponent,
    PolicyIssueComponent,
    TitleComponent,
    ButtonComponent,
    ChipComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor() {
    register();
  }
}
