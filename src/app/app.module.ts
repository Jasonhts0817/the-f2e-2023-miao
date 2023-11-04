import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdvocateComponent } from './advocate/advocate.component';
import { LastestEventComponent } from './lastest-event/lastest-event.component';
import { PolicyIssueComponent } from './policy-issue/policy-issue.component';
import { TitleComponent } from './shared/title/title.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, AdvocateComponent, LastestEventComponent, PolicyIssueComponent, TitleComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
